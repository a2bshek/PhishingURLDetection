import pickle
from feature_extraction import generate_data_set
import pickle
import sys
model = pickle.load(open("./xgb.pkl","rb"))
#print("python script output:"+sys.argv[1])
x = model.predict([generate_data_set(sys.argv[1])])
print(x)
