// Chai est une bibliothèque d'assertions pour JavaScript qui offre une syntaxe expressive et flexible pour écrire des tests. Elle fonctionne bien avec des frameworks de tests tels que Mocha. Voici une explication des principales fonctionnalités de Chai pour les assertions :

function foo(){
    console.log('FOO');
}
function bar(){
    console.log('BAR');
}


//Types d'assertions :
//1. Assertions d'égalité :
expect(foo).to.equal(bar) //: Vérifie que foo est égal à bar.
expect(foo).to.eql(bar) //: Compare récursivement les propriétés de foo à celles de bar.
//2. Assertions de non-égalité :
expect(foo).to.not.equal(bar)// : Vérifie que foo n'est pas égal à bar.
expect(foo).to.not.eql(bar) //: Vérifie que foo n'est pas récursivement égal à bar.
//3. Assertions de vérité :
expect(foo).to.be.true //: Vérifie que foo est vrai.
expect(foo).to.be.false// : Vérifie que foo est faux.
//4. Assertions de nullité :
expect(foo).to.be.null//: Vérifie que foo est nul.
expect(foo).to.not.be.null //: Vérifie que foo n'est pas nul.
//5. Assertions sur les types :
expect(foo).to.be.a('string') //: Vérifie que foo est une chaîne de caractères.
expect(foo).to.be.an('array')// : Vérifie que foo est un tableau.

//Modificateurs :
//1. not :
//Utilisé pour inverser le sens d'une assertion.
expect(foo).to.not.equal(bar);

//2. deep :
//Utilisé pour activer une comparaison en profondeur (récursive).
expect(foo).to.deep.equal(bar);

//Assertions avancées :
//1. Assertions sur les chaînes de caractères :
expect(foo).to.have.lengthOf(n) //: Vérifie que la longueur de foo est égale à n.
expect(foo).to.include('bar') //: Vérifie que foo inclut la sous-chaîne 'bar'.

//2. Assertions sur les tableaux :
expect(foo).to.be.an('array').that.includes('bar') //: Vérifie qu'un tableau foo inclut l'élément 'bar'.
// 3. Assertions sur les objets :
expect(foo).to.have.property('key', 'value')// : Vérifie qu'un objet foo a une propriété 'key' avec la valeur 'value'.