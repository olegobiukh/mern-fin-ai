import Stats from "../Stats/Stats";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const Main = () => {
  return (
    <div className="bg-black min-h-screen w-full py-10 ">
      <div className="max-w-[1200px] w-full mx-auto px-4">
        <QueryClientProvider client={queryClient}>
          <Stats />
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default Main;
