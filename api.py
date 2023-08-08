import os
from flask import Flask, request
from flask_restful import Api, Resource


app = Flask(__name__)
api = Api(app)

class Image(Resource):
    def post(self):
        try:
            # Get the image file from the request
            img = request.files.get("image")
            print(img)

            img.close()

            #WRITE YOUR CODE HERE
            
            #Do all image processing in here

            #WRITE YOUR CODE HERE


            
            #Depending if it should send True or False return it.
            return True #or False


            


        except Exception as e:
            # If there is any error during processing, return False
            return False

api.add_resource(Image, "/image")

if __name__ == "__main__":
    app.run(host='192.168.1.102', port=5000, debug=True)

