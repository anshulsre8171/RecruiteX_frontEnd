import Swal from "sweetalert2"; 
export const swalFire=(title,text,type)=>{
  Swal.fire({
    title ,
    text ,
    icon: type
  });
 }