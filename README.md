
# **Angular-Advanced-Project**

Bu proje, modern web geliştirme standartlarını ve test stratejilerini birleştirerek verimli, ölçeklenebilir ve sürdürülebilir bir kod yapısı sunmayı hedefler. Proje, **Angular** tabanlıdır ve kapsamlı **Cypress** ve Unit testleri içerir.

## **İçindekiler**
1. [Başlangıç](#başlangıç)
2. [Proje Yapısı](#proje-yapısı)
3. [Test Stratejileri](#test-stratejileri)
4. [Kurulum](#kurulum)
5. [Geliştirme](#geliştirme)
6. [Test Çalıştırma](#test-çalıştırma)
7. [Kod Standartları ve En İyi Uygulamalar](#kod-standartları-ve-en-iyi-uygulamalar)
8. [Katkı Rehberi](#katkı-rehberi)

---

## **Başlangıç**

Bu proje, modern web uygulamalarının temel ihtiyaçlarını karşılamak üzere tasarlanmış, modüler ve test edilebilir bir mimari kullanır.

### **Teknolojiler**
- **Angular**: Web uygulaması geliştirmek için kullanılan framework.
- **Cypress**: E2E (uçtan uca) testler için modern test aracı.
- **TypeScript**: Güçlü tip kontrolü sağlayan JavaScript süper seti.
- **Material Design**: Kullanıcı dostu UI bileşenleri.
- **RxJS**: Reactif programlama için kullanılan kütüphane.

---

## **Proje Yapısı**

```plaintext
src/
├── app/
│   ├── core/              # Servisler ve merkezi logic.
│   ├── features/          # Modüler özellik bileşenleri.
│   │   ├── dashboard/     # Dashboard bileşenleri ve routing.
│   │   └── users/         # Users bileşenleri ve routing.
│   ├── shared/            # Paylaşılan modüller (UI bileşenleri, yardımcı fonksiyonlar).
│   └── app.module.ts      # Ana modül.
├── assets/                # Statik dosyalar (görseller, JSON vb.).
├── environments/          # Ortam yapılandırmaları (dev/prod).
└── styles/                # Global stil dosyaları.
```

---

## **Test Stratejileri**

Proje, farklı seviyelerde test stratejileri kullanarak güvenilirlik ve kaliteyi artırmayı hedefler:

### **1. Unit Testler**
- **Amaç**: Tek bir bileşenin veya fonksiyonun doğru çalıştığını doğrulamak.
- **Araçlar**: Jasmine ve Karma.
- **Konum**: `src/app/**/*.spec.ts`
- **Örnek Test**:
    ```typescript
    it('should return correct total price', () => {
      const result = calculateTotal([100, 200, 300]);
      expect(result).toBe(600);
    });
    ```

---

### **2. Entegrasyon Testleri**
- **Amaç**: Modüller arası entegrasyonların sorunsuz çalıştığını doğrulamak.
- **Araçlar**: Jasmine, Karma.
- **Konum**: `src/app/**/*.spec.ts`
- **Örnek Test**:
    ```typescript
    it('should render user list correctly', () => {
      component.users = [{ name: 'Ali' }, { name: 'Veli' }];
      fixture.detectChanges();
      const userList = fixture.nativeElement.querySelectorAll('.user-item');
      expect(userList.length).toBe(2);
    });
    ```
<img width="1186" alt="Screenshot 2024-12-08 at 02 31 17" src="https://github.com/user-attachments/assets/95119333-1319-4ff9-ab26-a5642fbebc4f">

---

### **3. E2E (Uçtan Uca) Testler**
- **Amaç**: Uygulamanın kullanıcı perspektifinden doğru çalıştığını doğrulamak.
- **Araçlar**: Cypress.
- **Konum**: `cypress/e2e/**/*.cy.ts`
- **Örnek Test**:
    ```javascript
    describe('DashboardComponent', () => {
      it('should display products', () => {
        cy.visit('/dashboard');
        cy.get('.product-card').should('have.length', 2);
      });

      it('should navigate to the Users page', () => {
        cy.visit('/dashboard');
        cy.get('.go-to-users-btn').click();
        cy.url().should('include', '/users');
      });
    });
    ```
<img width="1093" alt="Screenshot 2024-12-08 at 02 24 50" src="https://github.com/user-attachments/assets/e260f1d4-5c2b-48ab-9dc9-e2c797eaed1e">
<img width="1093" alt="Screenshot 2024-12-08 at 02 24 59" src="https://github.com/user-attachments/assets/27f522fb-5668-429e-976b-6093e3a5e06f">

---

## **Kurulum**

Projenizi klonladıktan sonra bağımlılıkları yüklemek için aşağıdaki adımları izleyin:

```bash
git clone <repository-url>
cd project-directory
npm install
```

---

## **Geliştirme**

Geliştirme ortamını başlatmak için şu komutu çalıştırın:

```bash
npm start
```

Tarayıcınızı açın ve `http://localhost:4200` adresine gidin.

---

## **Test Çalıştırma**

### **Unit ve Entegrasyon Testleri**
Unit testlerini çalıştırmak için şu komutu kullanın:

```bash
npm run test
```

### **E2E Testleri**
Cypress ile E2E testlerini çalıştırmak için şu komutu kullanın:

```bash
npm run e2e
```

---

## **Kod Standartları ve En İyi Uygulamalar**

- Kodlama standartları için **ESLint** ve **Prettier** kullanılmıştır.
- Tüm bileşenler **modüler** ve **yeniden kullanılabilir** şekilde tasarlanmıştır.
- **Responsive tasarım** için modern CSS özellikleri ve grid sistemi kullanılmıştır.

---

## **Katkı Rehberi**

1. Yeni bir özellik eklemek veya hata düzeltmek için bir **branch** oluşturun.
2. Kod değişikliklerinizi yaptıktan sonra testleri çalıştırarak doğruluğunu kontrol edin.
3. Pull request açmadan önce kodu linters ve formatlama araçlarıyla kontrol edin.

---
