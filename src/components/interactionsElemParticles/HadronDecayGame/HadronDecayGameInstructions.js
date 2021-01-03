import React from 'react';

function HadronDecayGameInstructions({ toggleOpenGame }) {
    

    const HadronDecayChoice = ({ hadron, firstProduct, secondProduct, thirdProduct }) => {
        const arrowHTML = <span>&#8594;</span>
        const hadronDecayElements = {hadron, firstProduct, secondProduct, thirdProduct}
        
        const proceedToHadronDecayGame = () => {
            toggleOpenGame(hadronDecayElements);
        };
        return (
            <div>
                <input type="radio" onClick={proceedToHadronDecayGame} />
                <label> {hadron} {arrowHTML} {firstProduct} {secondProduct} {thirdProduct}</label>
            </div>
        )
    }
    return (
        <div className="hadron-instructions-container">
            <div>
                <p>Διαλεξε μια απο τις διασπασεις που σου επιτρεπεται στο δεξι μερος της οθονης
                (...) και της αλληλεπίδρασης των κουάρκ μεταξύ τους.</p>
                <p>Η διάσπαση γίνεται ακολουθώντας τα βήματα</p>
                <ol>
                    <li>Επιλέγεις τα κουαρκ(...)</li>
                    <li>Ενεργοποιείς ένα ή περισσότερα (...)</li>
                    <li>Από έναν κατάλογο πολλαπλής (...)</li>
                    <li>Στρέφεις την κορυφή σύμφωνα (...)</li>
                    <li>Επαναλαμβανεις βήμα 3 και 4 όσες φορές (...)</li>
                    <li>Εαν στα σωματίδια υπάρχουν κουάρκ (...)</li>
                    <li>Αν θελεις βλέπεις όλη την διαδικασία της διάσπασης</li>
                </ol>
            </div>
            <div className="hadron-instructions__decay-list">
                <HadronDecayChoice
                    hadron="n"
                    firstProduct="p"
                    secondProduct={["e", <sup>-</sup>]}
                    thirdProduct={[<span style={{ 'text-decoration': 'overline' }}>v</span>, <sub>e</sub>]}
                />
                <HadronDecayChoice
                    hadron="Λ"
                    firstProduct="p"
                    secondProduct={["π", <sup>-</sup>]}
                />
                <HadronDecayChoice
                    hadron={["Σ", <sup>-</sup>]}
                    firstProduct="n"
                    secondProduct={["π", <sup>-</sup>]}
                />
                <HadronDecayChoice
                    hadron={["Ω", <sup>-</sup>]}
                    firstProduct="Λ"
                    secondProduct={["Κ", <sup>-</sup>]}
                />
                <HadronDecayChoice
                    hadron={["Κ", <sup>+</sup>]}
                    firstProduct={["μ", <sup>+</sup>]}
                    secondProduct={["ν", <sub>μ</sub>]}
                />
                <HadronDecayChoice
                    hadron={["π", <sup>+</sup>]}
                    firstProduct={["μ", <sup>+</sup>]}
                    secondProduct={["ν", <sub>μ</sub>]}
                />
            </div>
        </div >)
}

export default HadronDecayGameInstructions;