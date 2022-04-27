import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Alzheimer Classification App"
          description="Alzheimer Classification App"
        />
      }
    >
      <div className="hero-img" />
      <div className="hero-card" />
      <div className="wrapper">
        <section className="hero">
          <h1 className="title">Lorem ipsum dolor sit amet.</h1>
          <p className="mt-12 text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <svg
            viewBox="0 0 16 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z"
              fill="black"
            />
          </svg>
        </section>
        <section>
          <div className="feature">
            <div className="content">
              <p className="title">Lorem Ipsum</p>
              <p className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                necessitatibus asperiores minima magni quisquam veniam!
              </p>
            </div>
            <img
              src="/assets/images/woman-doing-occupational-therapy-session-with-psychologist.jpg"
              alt="Woman doing ocupational therapy"
            />
          </div>
          <div className="feature flip">
            <div className="content">
              <p className="title">Lorem Ipsum</p>
              <p className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                necessitatibus asperiores minima magni quisquam veniam!
              </p>
            </div>
            <img
              src="/assets/images/woman-doing-occupational-therapy-session-with-psychologist.jpg"
              alt="Woman doing ocupational therapy"
            />
          </div>
          <div className="feature">
            <div className="content">
              <p className="title">Lorem Ipsum</p>
              <p className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                necessitatibus asperiores minima magni quisquam veniam!
              </p>
            </div>
            <img
              src="/assets/images/woman-doing-occupational-therapy-session-with-psychologist.jpg"
              alt="Woman doing ocupational therapy"
            />
          </div>
        </section>
      </div>
    </Main>
  );
};

export default Index;
