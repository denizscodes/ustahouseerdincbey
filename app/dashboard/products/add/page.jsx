"use client";
import { useState } from "react";
import { addProduct } from "../../../lib/actions";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";

const AddProductPage = () => {
  const [islemdurumBir, setislemdurumBir] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await addProduct(formData);
      // Başarılı form gönderiminden sonra yapılacak işlemler
    } catch (error) {
      console.error("Form gönderimi sırasında bir hata oluştu:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.section}>
          <h2>Müşteri Bilgileri</h2>
          <input type="text" placeholder="Müşteri İsim" name="musteriisim" />
          <select name="tip" id="tip" className={styles.inputField}>
            <option value="general">Müşteri Tipi</option>
            <option value="Bireysel">Bireysel</option>
            <option value="Kurumsal">Kurumsal</option>
          </select>{" "}
          <input type="text" placeholder="Telefon" name="phone" />
          <input type="text" placeholder="Telefon 2" name="phonetwo" />
          <input type="text" placeholder="İl" name="il" />
          <input type="text" placeholder="İlçe" name="ilce" />
          <input type="text" placeholder="Adres" name="address" />
          <input type="text" placeholder="Kimlik" name="kimlik" />
        </div>
        {/* Ürün Bilgileri */}
        <div className={styles.section}>
          <h2>Ürün Bilgileri</h2>
          <input type="text" placeholder="Başlık" name="title" />
          <input type="text" placeholder="Uygun Zaman" name="musaitzaman" />
          <input type="text" placeholder="Operatör Notu" name="operatornot" />
          <input type="text" placeholder="Cihaz Marka" name="cihazmarka" />
          <input type="text" placeholder="Cihaz Türü" name="cihaztur" />
          <input type="text" placeholder="Cihaz Model" name="cihazmodel" />
          <input type="text" placeholder="Cihaz Arıza" name="cihazariza" />
        </div>
        <div className={styles.section}>
          <input type="text" placeholder="Operatör Notu" name="operatornot" />

        </div>

        {/* İşlem 1 Bilgileri */}
        
        {/* Müşteri Bilgileri */}
        

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default AddProductPage;
