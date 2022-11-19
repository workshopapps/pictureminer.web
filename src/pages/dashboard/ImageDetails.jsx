import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';

import warningIcon from '../../assets/warning-icon.png';
import { useState } from 'react';

const ImageDetails = () => {
  const TAG_LIST = [
    { title: 'Water', percentage: '55%' },
    { title: 'Trees', percentage: '30%' },
    { title: 'Cloth', percentage: '20%' },
    { title: 'Sky', percentage: '10%' },
  ];

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleDeleteModalHandler = () => {
    setShowDeleteModal((prev) => !prev);
  };

  return (
    <main className="pt-12">
      <section className="flex justify-between items-center">
        <h2 className="font-bold text-3xl">Picture ID: #123AK</h2>

        <div className="flex gap-4">
          <Button
            styles={{
              background: '#ff6c00',
              color: 'white',
              padding: '1rem',
              width: '14rem',
              borderRadius: '.5rem',
              fontSize: '1.5rem',
              fontWeight: '500',
            }}
            text="Save as Json"
          />
          <Button
            styles={{
              border: '1px solid #ff6c00',
              color: '#ff6c00',
              padding: '1rem 2rem',
              width: '14rem',
              borderRadius: '.5rem',
              fontSize: '1.5rem',
              fontWeight: '500',
            }}
            text="Delete"
            onclick={toggleDeleteModalHandler}
          />
        </div>
      </section>
      <section className="py-8">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1596120236172-231999844ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmFjYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Image descr"
            />
          </div>
          <div className="bg-[#f8f8f8] md:w-1/2 w rounded-md p-6 flex flex-col gap-8">
            <h3 className="font-[500] text-3xl">Image description</h3>

            <p>
              This is an image of EKO hotel and suites, a popular 5 star hotel
              in victoria island, lagos, Nigeria.
            </p>

            <p>
              You can book rooms in this hotel as low as N50,000 for standard
              rooms and N80,000 for VIP rooms. The hotel is equipped with modern
              facilities like olympic size pool, gym, exquisite bar and a nice
              ambience. You can visit https://www.ekohotels.com/ to learn more
              about the hotel.
            </p>

            <div className="flex gap-6 mt-8">
              <p>Was this article helpful</p>

              <div className="flex gap-4">
                <div className="rounded-full bg-[#ffe2cc] text-black flex items-center text-2xl font-normal gap-2 px-2">
                  Yes
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.03014 4.99023H1.16183C0.817876 4.99023 0.539062 5.26905 0.539062 5.613V13.3976C0.539062 13.7416 0.817876 14.0204 1.16183 14.0204H3.03014C3.37409 14.0204 3.65291 13.7416 3.65291 13.3976V5.613C3.65291 5.26905 3.37409 4.99023 3.03014 4.99023Z" />
                    <path d="M11.0392 4.99108C10.5597 4.99108 10.2531 4.48007 10.4787 4.05693L11.6132 1.92977C12.002 1.20075 11.4737 0.320312 10.6475 0.320312C10.3573 0.320312 10.0789 0.435618 9.87367 0.640852L6.25304 4.26147C5.7859 4.72864 5.52344 5.36225 5.52344 6.02291V11.5302C5.52344 12.9059 6.63872 14.0212 8.01451 14.0212H13.1724C14.0226 14.0212 14.7656 13.4472 14.9802 12.6245L16.4306 7.06493C16.4661 6.92845 16.4842 6.78799 16.4842 6.64696C16.4842 5.73245 15.7428 4.99108 14.8283 4.99108H11.0392Z" />
                  </svg>
                </div>
                <div className="rounded-full bg-[#ffe2cc] text-black flex items-center text-2xl font-normal gap-2 px-2">
                  No{' '}
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4408 9.16797H14.2489C14.5817 9.16797 14.8516 8.89815 14.8516 8.56529V1.03181C14.8516 0.698949 14.5817 0.42913 14.2489 0.42913H12.4408C12.108 0.42913 11.8382 0.698949 11.8382 1.03181V8.56529C11.8382 8.89815 12.108 9.16797 12.4408 9.16797Z"
                      fill="black"
                    />
                    <path
                      d="M4.69342 9.16741C5.15748 9.16741 5.45421 9.66194 5.23583 10.0714L4.13793 12.13C3.76167 12.8355 4.2729 13.6875 5.07244 13.6875C5.35335 13.6875 5.62272 13.5759 5.82136 13.3773L9.32518 9.87348C9.77725 9.42138 10.0312 8.80821 10.0312 8.16886V2.83929C10.0312 1.50788 8.95194 0.428572 7.62054 0.428572H2.62903C1.80625 0.428572 1.08723 0.984092 0.879546 1.78023L-0.524002 7.16046C-0.558445 7.29254 -0.575892 7.42847 -0.575892 7.56495C-0.575892 8.44995 0.141566 9.16741 1.02657 9.16741H4.69342Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className=" p-6 bg-[#f8f8f8] rounded-lg md:w-1/2">
            <h3 className="text-3xl font-[500]">Generated Tags</h3>

            <div className="flex flex-col gap-4">
              {TAG_LIST.map((tag, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-between"
                >
                  <div className="flex py-3 px-6 w-full bg-white relative">
                    <div
                      className={
                        'bg-[rgba(255,181,128,0.2)] absolute top-0 left-0 h-full'
                      }
                      style={{ width: tag.percentage }}
                    ></div>
                    <p>{tag.title}</p>
                    {console.log(tag.percentage)}
                  </div>
                  <p className="absolute top-3 right-4">{tag.percentage}</p>
                </div>
              ))}
            </div>
          </div>
          <div className=" p-6 bg-[#f8f8f8] rounded-lg md:w-1/2">
            <h3 className="text-2xl">Query AI</h3>

            <form className="w-full">
              <input
                type="text"
                placeholder="Ask any question?"
                className="border p-4 rounded-lg w-full outline-none text-xl"
              />
            </form>
          </div>
        </div>
      </section>

      {showDeleteModal && (
        <Modal>
          <div className="flex flex-col items-center justify-center gap-8 p-4">
            <img className="" src={warningIcon} alt="warning icon" />

            <h2 className="text-[1.7rem] font-[500]">Delete Image</h2>

            <p className="text-[#797b89] text-center text-md">
              Are you sure you want to delete this image? This action cannot be
              undone.
            </p>

            <div className="flex gap-4 mt-4 w-full">
              <Button
                styles={{
                  border: '1px solid #8e8e8e',
                  color: '#8e8e8e',
                  padding: '1rem 2rem',
                  width: '100%',
                  borderRadius: '.5rem',
                  fontSize: '1.5rem',
                  fontWeight: '500',
                }}
                text="Cancel"
                onclick={toggleDeleteModalHandler}
              />

              <Button
                styles={{
                  background: '#f04438',
                  color: 'white',
                  padding: '1rem',
                  width: '100%',
                  borderRadius: '.5rem',
                  fontSize: '1.5rem',
                  fontWeight: '500',
                }}
                text="Delete"
              />
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default ImageDetails;
