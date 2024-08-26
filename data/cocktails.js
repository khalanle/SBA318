// this is my self-made api!
// here i will store my 'database' of cocktails and ingredient items

const cocktails = [
    {
        id: 1,
        name: "Margarita",
        liquor: "tequila",
        ingredients: ["lime juice", "triple sec", "agave syrup"],
        prep: "In a shaker, add 2 oz of tequila, 1 oz of triple sec, 0.5 oz of lime juice, and 0.5 of agave syrup. Shake well and strain over a glass filled with ice. Enjoy!",
    },
    {
        id: 2,
        name: "Old Fashioned",
        liquor: "bourbon",
        ingredients: ["orange", "cherry", "bitters", "simple",],
        prep: "In a rocks glass, muddle a slice of orange, cherry, 0.5 oz of simple syrup and two splashes of bitters. Add an ice ball and pour 2 oz of bourbon into the glass. Stir lightly and enjoy!",
    },
    {
        id: 3,
        name: "Mojito",
        liquor: "rum",
        ingredients: ["mint","lime juice", "club soda", "simple"],
        prep: "In a shaker, add rum, mint leaf, 1 oz of lime juice, and 0.5 oz of simple syrup. Shake well and strain over a glass filled with ice. Top with soda water, garnish with lime and mint and enjoy!",
    },
    {
        id: 4,
        name: "Long Island",
        liquor: "vodka, tequila, rum, gin",
        ingredients: ["lemon juice", "cola", "sour"],
        prep: "Fill a pint glass with ice. Add 0.5 oz of each of your liquors. Add 1 oz of lemon juice or sour mix. Top with a splash of cola, garnish with a lemon, and enjoy!",
    },
    {
        id: 5,
        name: "Moscow Mule",
        liquor: "vodka",
        ingredients: ["lime juice","ginger beer","simple"],
        prep: "Fill a copper mug with ice, and add 2 oz of vodka. Add 0.5 oz of simple syrip and top with ginger beer. Garnish with lime wedge and enjoy!",
    },
    {
        id: 6,
        name: "Cosmopolitan",
        liquor: "vodka",
        ingredients: ["triple sec", "lime juice", "cranberry juice"],
        prep: "In a shaker full of ice, add 2 oz of vodka, 1 oz of triple sec, 0.5 oz of lime juice, and 1.5 oz of cranberry. Strain over martini glass and enjoy!",
    },
    {
        id: 7,
        name: "Tom Collins",
        liquor: "gin",
        ingredients: ["lime juice", "club soda"],
        prep: "In a collins glass, fill with ice, add 2 oz of gin, 0.5 oz of lime juice, and top with soda water. Enjoy!",
    },
    {
        id: 8,
        name: "Sidecar",
        liquor: "cognac",
        ingredients: ["triple sec", "lemon juice"],
        prep: "In a shaker, add 2 oz of cognac, 0.5 oz of triple sec, and 0.5 oz of lemon juice. Shake well, strain over glass, and emjoy!",
    },
    {
        id: 9,
        name: "Aperol Spritz",
        liquor: "aperol",
        ingredients: ["prosecco", "club soda", "bitters"],
        prep: "In a wine glass, add 1.5 oz of aperol, two dashes of bitters 2 oz of prosecco, and top with club soda. Garnish with orange slice, and enjoy!",
    },
    {
        id: 10,
        name: "Espresso Martini",
        liquor: "vodka",
        ingredients: ["espresso","simple"],
        prep: "In a shaker, add 1.5 oz of vodka, 2 oz of espresso, 1 oz of simple. Shake well and strain over martini glass. Garnish with coffee bean and enjoy!",
    },
]

module.exports = cocktails;