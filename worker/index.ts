import type { Env, ContactMessage } from "./types";

export default {
    async fetch(request: Request, env: Env) {
        const url = new URL(request.url);

        const corsHeaders = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        };

        if (request.method == "OPTIONS") {
            return new Response(null, { headers: corsHeaders });
        }

        if (url.pathname == "/api/contact" && request.method == "POST") {
            try {
                const body = (await request.json()) as ContactMessage

                if (!body.name || !body.email || !body.message) {
                    return Response.json({
                        success: false,
                        error: "Tous les champs sont requis.",
                        status: 400,
                        headers: corsHeaders
                    })
                }

                const ResendResponse = await fetch("https://api.resend.com/emails", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
                    },
                    body: JSON.stringify({
                        from: "Resend <onboarding@resend.dev>",
                        to: env.DESTINATION_EMAIL,
                        subject: `Nouveau message de ${body.name}`,
                        html: `
                            <div style="font-family: sans-serif; line-height: 1.5;">
                                <h2>Nouveau message de contact</h2>
                                <p><strong>Nom :</strong> ${body.name}</p>
                                <p><strong>Email :</strong> ${body.email}</p>
                                <p><strong>Message :</strong></p>
                                <p style="white-space: pre-wrap;">${body.message}</p>
                            </div>
                        `,
                    })
                })

                if (!ResendResponse.ok) {
                    const errorData = await ResendResponse.text();
                    console.error("Erreur Resend:", errorData);

                    throw new Error("Échec de l'envoi de l'email");
                }

                return Response.json({
                    success: true,
                    error: "Email envoyé avec succès",
                    status: 200,
                    headers: corsHeaders
                })
            }

            catch (err) {
                return Response.json({
                    success: false,
                    error: "Erreur serveur lors de l'envoi",
                    message: `${err}`,
                    status: 500,
                    headers: corsHeaders
                })
            }
        }

        else if (url.pathname == "/api/download" && request.method == "GET") {
            const filePath = url.searchParams.get("filePath")

            if (!filePath) {
                return new Response("Missing filePath", { status: 400 });
            }

            const r2Url = env.VITE_R2_URL
            // console.log(`[DEBUG]: request ${r2Url}${filePath}`)


            const res = await fetch(`${r2Url}${filePath}`)

            // console.log(`[DEBUG]: fetch status ${res.status}`)
            // console.log(`[DEBUG]: fetch ok ${res.ok}`)
            // console.log(`[DEBUG]: content-type ${res.headers.get("content-type")}`)
            // console.log(`[DEBUG]: content-length ${res.headers.get("content-length")}`)

            if (!res.ok) {
                return new Response("File not found", { status: 404 });
            }

            const blob = await res.arrayBuffer()
            if (blob.byteLength === 0) {
                return new Response("File is empty", { status: 500 });
            }

            return new Response(blob, {
                headers: {
                    "Content-Type": "application/pdf",
                    "Content-Disposition": `attachment; filename="${filePath.split("/").pop()}"`,
                    "Content-Length": blob.byteLength.toString(),
                }
            })
        }

        return new Response("Not Found", { status: 404, headers: corsHeaders });
    },
} satisfies ExportedHandler<Env>;
