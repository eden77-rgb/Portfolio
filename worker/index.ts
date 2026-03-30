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
        
        return new Response("Not Found", { status: 404, headers: corsHeaders });
    },
} satisfies ExportedHandler<Env>;
