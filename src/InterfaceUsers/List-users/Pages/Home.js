import Users from '../components/Users/Users';

const HomePage = () => {
    return (
      <div
        style={{
          backgroundImage:
            " url(https://tailwindtoolbox.github.io/Rainblur-Landing-Page/header.png) ",
        }}
      >
        <div className="container mx-auto my-12">
          <div className="flex flex-wrap justify-center">
            <div className="px-4 w-6/12 sm:w-3/12">
              <img
                src="https://editionsyaich.com/images/books/cover/dfe56aff-26a6-48c0-9f37-08da2a796c8a.png"
                className="max-w-full h-auto border-none rounded-full shadow align-middle"
              />
            </div>
            <div className="px-4 w-6/12 sm:w-3/12">
              <img
                src="https://editionsyaich.com/images/books/cover/d1d34528-f14b-4826-213e-08da6eeaf82d.png"
                className="max-w-full h-auto border-none rounded-full shadow-lg align-middle"
              />
            </div>
          </div>
        </div>

        <Users />
      </div>
    );
};

export default HomePage;