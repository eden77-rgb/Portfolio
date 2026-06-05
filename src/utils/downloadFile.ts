const downloadFile = (filePath: string, filename: string) => {
    fetch(`/api/download?filePath=${encodeURIComponent(filePath)}`)
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(blob)

            const link = document.createElement('a')
            link.href = url
            link.setAttribute(
                'download',
                `${filename}`,
            )

            document.body.appendChild(link)

            link.click()
            link.parentNode?.removeChild(link)
        })
}

export default downloadFile