import React from 'react';
import './BioLabReport.css'; // Import the CSS file here
import homosapiens from '../assets/homosapiens.jpg'; // Import the image
import homosapiens2 from '../assets/homosapiens2.jpg'; // Import the image
import ho from '../assets/ho.jpg';
import ho2 from '../assets/ho2.jpg';

export default function BioLabReport() {
  return (
    <div className="lab-container">
      <div className="lab-card">
        
        {/* Header Section */}
        <header className="lab-header">
          <h1 className="lab-title">Лабораторна робота 1</h1>
          <div className="lab-meta">
            <p>
              <strong className="lab-meta-label">Тема:</strong>{' '}
              Визначення таксономічного положення виду в системі органічного світу.
            </p>
            <p>
              <strong className="lab-meta-label">Мета:</strong>{' '}
              Розвивати уміння застосовувати знання про критерії виду на практиці та формувати практичні уміння характеризувати види.
            </p>
          </div>
        </header>

        {/* Thematic Division Line */}
        <div className="lab-divider"></div>

        {/* Main Content Section */}
        <main className="lab-main">
          <h2 className="lab-section-title">
            Хід роботи
          </h2>

          {/* Species Info */}
          <div className="lab-species-container">
            
            {/* Image Placeholder */}
            <div className="lab-image-wrapper">
              <div className="lab-image-placeholder">
                <span><img src={homosapiens} alt="Species Image" /></span>
              </div>
              <div className="lab-image-placeholder">
                <span><img src={homosapiens2} alt="Species Image" /></span>
              </div>
              <div className="lab-image-placeholder">
                <span><img src={ho} alt="Species Image" /></span>
              </div>
              <div className="lab-image-placeholder">
                <span><img src={ho2} alt="Species Image" /></span>
              </div>
            </div>

            {/* Text Information Layout */}
            <div className="lab-content-wrapper">
              
              {/* Nomenclature */}
              <div>
                <h3 className="lab-species-name">
                  Людина розумна
                </h3>
                <p className="lab-species-latin">
                  [Homo sapiens]
                </p>
              </div>

              {/* Taxonomic Position */}
              <div className="lab-taxonomy">
                <h4>Таксономічне положення:</h4>
                <ul>
                  <li>Царство: Тварини [Animalia]</li>
                  <li>Тип: Хордові [Chordata]</li>
                  <li>Клас: Ссавці [Mammalia]</li>
                  <li>Ряд: Примати [Primates]</li>
                  <li>Родина: Гомініди [Hominidae]</li>
                  <li>Рід: Людина [Homo]</li>
                </ul>
              </div>

              {/* Comparative Analysis */}
              <div className="lab-comparison-grid">
                
                <div className="lab-card-similar">
                  <h4>Ознаки спорідненості:</h4>
                  <p>
                    Прямохідність, розвиненість мозку, відсутність шерсті тощо.
                  </p>
                </div>
                
                <div className="lab-card-diff">
                  <h4>Ознаки відмінності:</h4>
                  <p>
                    Унікальна здатність до мислення, використання інструментів, розвинена мовна система тощо.
                  </p>
                </div>
                
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <section className="lab-footer">
            <h3>Підсумок роботи</h3>
            <p>
              Людина розумна - подібна до споріднених видів, але має унікальні ознаки, найбільше пов'язані з вищим розвитком ЦНС, максимальною відсутністю шерсті, здатністю до абстрактного мислення та планування...
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}