'use client';
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const currentPathName = usePathname();
  console.log(currentPathName);
  return (
    <>
     {
        currentPathName !== '/contact/company' ?    <h2>Common Layout for Contact</h2> : null
     }
      {children}
    </>
  )
}

export default Layout;
