import { getProviders, signIn } from "next-auth/react";
import Header from "../../Components/Header";

const signin = ({ providers }) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2  px-14 text-center">
        <h1 className="font-semibold text-3xl text-violet-700 leading-10">
          PicShare
        </h1>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-violet-500 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signin;
