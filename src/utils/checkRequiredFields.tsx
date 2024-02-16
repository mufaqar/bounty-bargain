import { toast } from "react-toastify";

export const CheckRequiredFields = (formData:any) => {
     if(!formData.websiteUrl){
          toast.warn("Store Website Required", { position: "top-right" });
     }
     if(!formData.code){
          toast.warn("Code Required", { position: "top-right" });
     }
     if(!formData.code){
          toast.warn("Discount Description Required", { position: "top-right" });
     }
}