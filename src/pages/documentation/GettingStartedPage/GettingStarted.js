import React from 'react';
import DocumentationHero from '../../../features/documentation/components/DocumentationHero';
import DocumentNav from '../../../features/documentation/components/DocumentNav';
import { ArrowRight } from 'iconsax-react';
import icon from './assets/icon.png';
// import ImageMining from '../../../assets/documentationImages/imageMining.webp';
// import DefiningImage from '../../../assets/documentationImages/definingImages.webp';

// import './gettingStarted.scss';
// import DocumentationSidebar from '../../../features/documentation/components/DocumentationSidebar';

const GettingStarted = () => {
  return (
    <div className="getting-started_wrapper">
      <DocumentNav />
      <DocumentationHero
        headerText="Getting Started"
        paragraphText="An overview of Discripto, how to download and use, basic templates and examples, and more."
      />

      <section
        className="getting-started_introductionContent px-9 py-10"
        id="introduction"
      >
        <div className="getting-started_mainContent flex flex-row mb-4">
          {/* <h1 className="getting-started_title">Introduction</h1>
          <div className="getting-started_underline" />

          <p>
            Get started with Discripto and learn by exploring interactive
            examples.
          </p> */}
          <div
            className="getting-started_overview my-8 flex flex-col gap-5"
            id="overview"
          >
            <h1 className="font-bold text-3xl mb-2">Overview</h1>
            <div className="text-[#434343]">
              <p className="mb-3 md:w-[60%]">
                Discripto (currently v3.3.7) has a few easy ways to quickly get
                started, each one appealing to a different skill level and the
                Discripto API is a REST API that makes it easy to find and
                retrieve the data you need from an Image, it provides a
                simplified response data structure via JSON payload (eliminating
                XML).
              </p>
              <p className="mb-2">
                The Discripto API provides an industry standard solution to:
              </p>
              <ul>
                <li>
                  Retrieve the contents of images as a text description of the
                  it&apos;s scenery.
                </li>
                <li>Check if text prompts exists in images use case.</li>
              </ul>
            </div>
          </div>

          <div className="hidden mt-8 text-[#434343] md:w-[40%] md:flex md:flex-row md:gap-2">
            <img src={icon} alt="icon" className="w-8 h-8" />
            <div>
              <p className="font-bold mb-1">ON THIS PAGE</p>

              <div className="text-sm">
                <ul>
                  <li>
                    <a href="#overview" className="mb-1">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#benefits">Benefits of Using Discripto API</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="benefits">
          <h1 className="font-bold text-3xl mb-4">
            Benefits of Using Discripto API
          </h1>
          <div className="flex items-center gap-7 lg:gap-10 flex-col md:flex-row md:flex-wrap mb-6">
            <div className="mb-3 w-1/2 md:w-[350px] lg:w-[450px]">
              <h3 className="font-bold text-bold">Get only what you need</h3>
              <p className="text-[#686868]">
                Just make a request with image through upload or URL, get back a
                JSON response containing what you need.
              </p>
            </div>
            <div className="mb-3 w-1/2 md:w-[350px] lg:w-[450px]">
              <h3 className="font-bold text-bold">Simple to use</h3>
              <p className="text-[#686868]">
                You only need to send the image and/or text prompt to get the
                response.
              </p>
            </div>
            <div className="mb-3 w-1/2 md:w-[350px] lg:w-[450px]">
              <h3 className="font-bold text-bold">
                Idustry standard solutions
              </h3>
              <p className="text-[#686868]">
                Discripto APIs use well-established and robust machine learning
                algorithms to classify your images.
              </p>
            </div>
            <div className="mb-3 w-1/2 md:w-[350px] lg:w-[450px]">
              <h3 className="font-bold text-bold">
                Access to images dashboard
              </h3>
              <p className="text-[#686868]">
                You have access to a dashboard containing all the requests you
                make for reference.
              </p>
            </div>
          </div>
          <p>
            You can find onboarding documentation for the IMDb API on the next
            page - including setting up your AWS Account, signing to the IMDb
            API endpoint, and sample queries to jump-start your integration.
          </p>
        </div>

        <div
          className="border border-[#B4B4B4] rounded-[8px] mt-6 px-4 py-2 flex fex-row justify-between items-center w-1/2
"
        >
          <div>
            <h3>Next</h3>
            <a>
              <p className="text-[#FF842B] font-bold mt-1">
                Getting access to the API
              </p>
            </a>
          </div>
          <ArrowRight />
        </div>

        {/* <div className="getting-started_download" id="download">
            <h1>Download</h1>
            <div className="download_content">
              <div>
                <h3>Tozoila</h3>
                <p>
                  Discripto (currently v3.3.7) has ways to quickly get started
                  appealing to a different skill level and case. Read through to
                  see what suits.
                </p>
                <button>Download Discripto</button>
              </div>
              <div>
                <h3>Source Code</h3>
                <p>
                  Discripto (currently v3.3.7) has ways to quickly get started
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
                  {` <!-- Latest compiled and minified JavaScript --> <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>`}
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
              Recognise and mine images with Discripto. each one appealing to a
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
              Recognise and mine images with Discripto. each one appealing to a
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
        /> */}
      </section>
    </div>
  );
};

export default GettingStarted;
