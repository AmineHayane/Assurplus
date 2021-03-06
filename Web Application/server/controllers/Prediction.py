# _*_coding:utf-8_*_
import numpy as np
import tensorflow as tf, sys
import tensorflow.python.platform
from tensorflow.python.platform import gfile
import pickle
from sklearn.svm import SVC, LinearSVC
from sklearn.externals import joblib
import json

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

lines = read_in()
name = lines[-1]

clf = joblib.load('svm.pkl')


##################### Fonctions : graph + extraction ############################

def create_graph():
    with gfile.FastGFile('retrained_graph_smartphones.pb', 'rb') as f:
        graph_def = tf.GraphDef()
        graph_def.ParseFromString(f.read())
        _ = tf.import_graph_def(graph_def, name='')


create_graph()

def extract_features(list_images, label):
    nb_features = 2048
    features = np.empty((len(list_images),nb_features))
    labels = []

    with tf.Session() as sess:

        next_to_last_tensor = sess.graph.get_tensor_by_name('pool_3:0')

        for ind, image in enumerate(list_images):
            

            if not gfile.Exists(image):
                tf.logging.fatal('File does not exist %s', image)

            image_data = gfile.FastGFile(image, 'rb').read()
            predictions = sess.run(next_to_last_tensor,
            {'DecodeJpeg/contents:0': image_data})
            features[ind,:] = np.squeeze(predictions)
            labels.append(label)

        return features, labels

#################### PREDICTION ################################################

#Image path
images_test =[]
path = 'client/dist/uploads/' + name
images_test.append(path)

#Features extraction
features,labels = extract_features(images_test,'')

#Prediction
X = features
prediction = clf.predict(X)

print(prediction[0])



