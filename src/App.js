import Header from './Components/admin/Header';
import Prodcut from './Components/admin/Product';
import Inquire from './Components/admin/Inquire';
import ProdcutDetails from './Components/admin/ProdcutDetails';
import ProdcutAdd from './Components/admin/ProductAdd';
import ProductEdit from './Components/admin/ProductEdit';
import SideNav from './Components/admin/SideNav';
import Footer from './Components/admin/Footer';


function App() {

  let uri = window.location.pathname.split('/');
  let token = localStorage.getItem("token");

  if (token != null)
  {
    if(uri[2] == "product-details")
    {
      return (
        <> 
        <Header />
        <ProdcutDetails />
        <SideNav />
        <Footer />
         </>
       );
    }else if(uri[2] == "add-product")
    {
      return (
        <> 
        <Header />
        <ProdcutAdd />
        <SideNav />
        <Footer />
         </>
       );
    }else if(uri[2] == "product-edit")
    {
      return (
        <> 
        <Header />
        <ProductEdit />
        <SideNav />
        <Footer />
         </>
       );
    }else if(uri[2] == "inquire")
    {
      return (
        <> 
        <Header />
        <Inquire />
        <SideNav />
        <Footer />
         </>
       );
    }else if (uri[2] == "logout")
    {
      localStorage.removeItem("token")
      localStorage.removeItem("name")
      window.location.href = '/admin/login'
    }
    else
    {
      return (
        <> 
        <Header />
        <Prodcut />
        <SideNav />
        <Footer />
         </>
       );
    }
  }else
  {
    window.location.href = '/admin/login'
  }
 
   
}

export default App;