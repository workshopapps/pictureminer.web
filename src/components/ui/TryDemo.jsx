import React from 'react';
import { images } from '../../Constants';
import { ExportCurve } from 'iconsax-react';
// import ImageUpload from '../../dashboard/ImageUpload';

function TryDemo({
  onImageChange,
  text = 'Try Demo',
  file = 'image',
  disable = false,
}) {
  // const [imagesUpload, setImagesUpload] = useState([]);

  //   const onImageChange = (e) => {
  //     setImagesUpload([...e.target.files]);
  //   };

  return (
    <div className="container__try-demo--sm w- border border-dashed border-secBrown rounded-lg flex flex-col items-center justify-center pt-8 pb-14">
      <h3 className="text-mainOrange text-large">{text}</h3>
      <img src={images.addToFolder} alt="" className="mt-10 h-16 w-16" />
      <p className="mt-6 text-xs md:text-sm text-gray-400">
        Drag and drop CSV file here or click to upload
      </p>
      <div className="relative bg-mainOrange cursor-pointer px-24 py-3 rounded-lg mt-6">
        <div className="flex justify-center items-center gap-2 text-white ">
          <ExportCurve size="24" color="#FFF" variant="Outline" />
          <p className="mt-2">
            Upload <span className="uppercase">{file}</span>
          </p>
        </div>
        <input
          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          id="upload"
          type="file"
          multiple
          accept=".csv"
          onChange={onImageChange}
          disabled={disable}
        />
      </div>
    </div>
  );
}

export default TryDemo;
