import React from 'react';
import DocumentationHero from '../../../features/documentation/components/DocumentationHero';
import DocumentNav from '../../../features/documentation/components/DocumentNav';
import ImageMining from '../../../assets/documentationImages/imageMining.png';
import DefiningImage from '../../../assets/documentationImages/definingImages.png';

import './gettingStarted.scss';
import DocumentationSidebar from '../../../features/documentation/components/DocumentationSidebar';

const GettingStarted = () => {
  return (
    <div className="getting-started_wrapper">
      <DocumentNav />
      <DocumentationHero
        headerText="Getting Started"
        paragraphText="An overview of Tozilla, how to download and use, basic templates and examples, and more."
      />

      <section
        className="getting-started_introductionContent"
        id="introduction"
      >
        <div className="getting-started_mainContent">
          <h1 className="getting-started_title">Introduction</h1>
          <div className="getting-started_underline" />

          <p>
            Get started with Tozilla and learn by exploring interactive
            examples.
          </p>
          <div className="getting-started_overview" id="overview">
            <h1>Overview</h1>
            <p>
              Torzilla (currently v3.3.7) has a few easy ways to quickly get
              started, each one appealing to a different skill level and use
              case. Read through to see what suits your particular needs.
            </p>
          </div>
          <div className="getting-started_download" id="download">
            <h1>Download</h1>
            <div className="download_content">
              <div>
                <h3>Tozoila</h3>
                <p>
                  Torzilla (currently v3.3.7) has ways to quickly get started
                  appealing to a different skill level and case. Read through to
                  see what suits.
                </p>
                <button>Download Tozilla</button>
              </div>
              <div>
                <h3>Source Code</h3>
                <p>
                  Torzilla (currently v3.3.7) has ways to quickly get started
                  appealing to a different skill level and case. Read through to
                  see what suits.
                </p>
                <button>Download source</button>
              </div>
            </div>
          </div>
          <div className="getting-started_code">
            <h3>Tozoila Code</h3>
            <p>All the code you need to mine pictures.</p>

            <div className="getting-started_codebox">
              <p style={{ color: ' #686868' }}>
                # These steps are to be followed when using google colab #and
                importing data from kaggle from google.colab import files #
                Install Kaggle library !pip install -q kaggle from google.colab
                import files #upload the kaggle.json file uploaded =
                files.upload() #make a diectoryin which kajggle.json is stored #
                ! mkdir ~/.kaggle ! cp kaggle.json ~/.kaggle/ #download the
                dataset into the colab !kaggle datasets download -d
                alessiocorrado99/animals10 #unzip the data !unzip
                /content/animals10.zip
              </p>
              <p>
                <span style={{ color: '#D92D20' }}>
                  {
                    '<!-- Optional theme --> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">'
                  }
                </span>
                <span style={{ color: '#0954C3' }}>
                  {` <!-- Latest compiled and minified JavaScript --> <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
`}
                </span>
              </p>
              <p
                style={{ color: '#D92D20' }}
              >{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" 
integrity="sha384-`}</p>

              <p>
                <span style={{ color: ' #686868' }}>
                  {
                    'Incase you are using a local machine, start from here. import tensorflow as tf from tensorflow.keras.preprocessing.image import ImageDataGenerator from tensorflow.keras.layers import Input, Dense from tensorflow.keras import Sequential,Model from tensorflow.keras.layers import BatchNormalization,Dropout,Flatten from tensorflow.keras.layers import Conv2D from tensorflow.keras.layers import MaxPooling2D from tensorflow.keras.layers import GlobalAveragePooling2D from tensorflow.keras.preprocessing import image import'
                  }
                </span>
                <span style={{ color: '#D92D20' }}>
                  {`
                    <link rel="stylesheet  numpy as np import os import cv2 train_data_dir='/kaggle/input/animals10/raw-img/' img_height=128 img_width=128 batch_size=64 nb_epochs=20 train_datagen = ImageDataGenerator(rescale=1./255, shear_range=0.2, zoom_range=0.2, horizontal_flip=True, validation_split=0.2) # set validation split"
                  `}
                </span>
              </p>
              <p style={{ color: '#00000' }}>
                {
                  'BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> <!-- Optional theme --> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"> <!-- Latest compiled and minified JavaScript --> <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>'
                }
              </p>
            </div>
          </div>
          <section className="imageMining" id="imageMining">
            <h3>Image Mining</h3>
            <p>
              Recognise and mine images with Torzilla. each one appealing to a
              different skill level and use case. Read through to see what suits
              your particular needs.
            </p>
            <img src={ImageMining} alt="Image Mining" />

            <p>
              In the area of Computer Vision, terms such as Segmentation,
              Classification, Recognition, and Detection are often used
              interchangeably, and the different tasks overlap. While this is
              mostly unproblematic, things get confusing if your workflow
              requires you to specifically perform a particular task. The terms
              image recognition and computer vision are often used
              interchangeably but are actually different. In fact, image
              recognition is an application of computer vision that often
              requires more than one computer vision task, such as object
              detection, image identification, and image classification.
            </p>
          </section>
          <section className="imageMining" id="definingImages">
            <h3>Defining Images</h3>
            <p>
              Recognise and mine images with Torzilla. each one appealing to a
              different skill level and use case. Read through to see what suits
              your particular needs.
            </p>
            <img src={DefiningImage} alt="Defining Mining" />

            <p>
              In the area of Computer Vision, terms such as Segmentation,
              Classification, Recognition, and Detection are often used
              interchangeably, and the different tasks overlap. While this is
              mostly unproblematic, things get confusing if your workflow
              requires you to specifically perform a particular task. The terms
              image recognition and computer vision are often used
              interchangeably but are actually different. In fact, image
              recognition is an application of computer vision that often
              requires more than one computer vision task, such as object
              detection, image identification, and image classification.
            </p>
          </section>
        </div>

        <DocumentationSidebar
          sectionIds={[
            'introduction',
            'overview',
            'imageMining',
            'definingImages',
          ]}
          linkTexts={[
            'Introduction',
            ' Overview',
            'Image Mining',
            ' Defining Images',
          ]}
        />
      </section>
    </div>
  );
};

export default GettingStarted;
