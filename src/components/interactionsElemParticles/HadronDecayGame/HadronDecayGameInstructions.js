import React from 'react';

function HadronDecayGameInstructions({ toggleOpenGame }) {


    const HadronDecayChoice = ({ hadron, firstProduct, secondProduct, thirdProduct }) => {
        const arrowHTML = <span>&#8594;</span>
        const hadronDecayElements = { hadron, firstProduct, secondProduct, thirdProduct }

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
                <p>Διάλεξε μία από τις διασπάσεις που σου προτείνονται στο δεξί μέρος της οθόνης και προσπάθησε να την αναλύσεις σε επίπεδο κουάρκ, για να δεις πως ακριβώς γίνεται ο μετασχηματισμός από το ένα σωματίδιο στο άλλο, του μετασχηματισμού ακι της αλληλεπίδρασης των κουαρκ μεταξύ τους.</p>
                <p>Η διάσπαση γίνεται ακολουθώντας τα παρακάτω βήματα:</p>
                <ol style={{ textAlign: 'left', margin: '50px' }}>
                    <li>Επιλέγεις τα κουάρκ από τα οποία αποτελείται το σωματίδιο προς διάσπαση</li>
                    <li>Ενεργοποιείς ένα ή περισσότερα κουάρκ με τα οποία θα ασχοληθείς στην συνέχεια.</li>
                    <li>Από έναν κατάλογο πολλαπλής επιλογής επιλέγεις την κατάλληλη κορυφή που θα σου δώσει τον μετασχηματισμό των κουάρκ που χρειάζεσαι για να καταλήξεις στα σωματίδια που επιθυμείς.</li>
                    <li>Στρέφεις την κορυφή σύμφωνα με τους κανόνες που σου δίνουν τις υπαρκτές αλληλεπιδράσεις μεταξύ των σωματιδίων και την προσαρμίζεις στο κουάρκ που ενεργοποίησες.</li>
                    <li>Επαναλαμβάνεις τα βήματα 3 και 4 όσες φορές χρειαστεί, μέχρι να φτάσεις στα προιόντα της διάσπασης.</li>
                    <li>Εάν στα προιόντα σωματίδια υπάρχουν κουάρκ, επιλέγεις από έναν κατάλογο πολλαπλής επιλογής το αδρόνιο ή τα αδρόνια που τα κουάρκ αυτά σχηματίζουν.</li>
                    <li>Αν θέλεις, βλέπεις όλη την διαδικασία της διάσπασης σε κινούμενη μορφή.</li>
                </ol>
                <strong>ΕΙΣΑΙ ΕΤΟΙΜΟΣ ΝΑ ΑΡΧΙΣΕΙΣ!
                ΔΙΑΛΕΞΕ ΔΙΑΣΠΑΣΗ!</strong>
            </div>
            <div className="hadron-instructions__decay-list">
                <HadronDecayChoice
                    hadron={["n"]}
                    firstProduct="p"
                    secondProduct={["e", <sup>-</sup>]}
                    thirdProduct={[<span style={{ 'textDecoration': 'overline' }}>v</span>, <sub>e</sub>]}
                    key={1}
                />
                <HadronDecayChoice
                    hadron={["Λ"]}
                    firstProduct="p"
                    secondProduct={["π", <sup>-</sup>]}
                    key={2}
                />
                <HadronDecayChoice
                    hadron={["Σ", <sup>-</sup>]}
                    firstProduct="n"
                    secondProduct={["π", <sup>-</sup>]}
                    key={3}
                />
                <HadronDecayChoice
                    hadron={["Ω", <sup>-</sup>]}
                    firstProduct="Λ"
                    secondProduct={["Κ", <sup>-</sup>]}
                    key={4}
                />
                <HadronDecayChoice
                    hadron={["Κ", <sup>+</sup>]}
                    firstProduct={["μ", <sup>+</sup>]}
                    secondProduct={["ν", <sub>μ</sub>]}
                    key={5}
                />
                <HadronDecayChoice
                    hadron={["π", <sup>+</sup>]}
                    firstProduct={["μ", <sup>+</sup>]}
                    secondProduct={["ν", <sub>μ</sub>]}
                    key={6}
                />
            </div>
        </div >)
}

export default HadronDecayGameInstructions;