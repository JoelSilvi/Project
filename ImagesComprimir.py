from PIL import Image

image = Image.open("C:/Project 23-01-2023/project/images/fondo_productos.jpg")

quality = 60

image.save("C:/Project 23-01-2023/project/images/fondo_productos.jpg-lite.jpg", optimize=True, quality=quality)

# descargar biblioteca pillow
# para instalar ejecutar pip install Pillow