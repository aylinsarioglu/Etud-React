/* 
! React Bileşenleri
*Kullanıcı arayüzü oluşturmak için kullanılan temel yapı parçalarıdır.(yapboz parçası)*

Bileşen;
1. Bir tane fonksiyon olusturuyoruz.
2. Fonksiyonun ismine bileşenin ismini veriyoruz.
!! Bileşen ismi mutlaka büyük harfle başlamalı.
!! - ya da _ koyulamaz.
!! birden fazla kelimeden oluşuyorsa Bİtişik yazılmalı ve her iki kelimenin ilk harfi büyük yazılmalıdır.
3.Bileşen return satırında kullanıcının göreceği arayüzü döndürmek zorundadır.(JSX-Javascript XML)

4.Döndürdüğümüz JSX Kodları her zaman bir kapsayıcıya sahip olmalıdır.


*/

import Button from "./Button";

function Header (){

    // eğer ki kullanıcı giriş yapmışsa hesap ismi ve çıkış butonu ekrana gelsin.
    // eğer ki kullanıcı hesabına girmemişse o zaman giriş yap ve kaydol butonu ekrana gelsin.

    const isAuth = true ; // apiden geldiğini düşünelim.


    return (
        <header>
            <h1>REACT</h1>

            <nav>
               { isAuth === true ? (
                <>
                 <h1>aylinsarıoğlu</h1> <Button title="Çıkış Yap" /> 
                </>
                ) : (
                <>
                    {" "}
                    < Button title="Giriş Yap" color="blue" /> {" "}
                    < Button title="Kayıt Ol" color="red" />
                </>
                )}
            </nav> 
        </header> 
    );
}
export default Header;