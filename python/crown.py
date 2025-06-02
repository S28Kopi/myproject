import qrcode

# Remplacez ceci par l'URL de votre image de couronne
image_url = "https://th.bing.com/th/id/OIP.x0DpwDjKFyMZru41KbEcngHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"

# Créez une instance de QRCode
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

# Ajoutez les données (l'URL de l'image)
qr.add_data(image_url)
qr.make(fit=True)

# Créez une image QR code
img = qr.make_image(fill_color="black", back_color="white")

# Enregistrez l'image QR code
img.save("crown.jpeg")

print("Le code QR pour afficher une couronne a été généré avec succès dans le fichier qr_code_couronne.png")