export const metadata = {

   title:{
    default: "Blog Layout",
    template: "%s | My Blogs"

   },

  description: "Blog Description",
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}