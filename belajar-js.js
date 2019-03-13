function tampilkanAngka(angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua;
}
function array() {
    console.log(tampilkanAngka(3, 3));
    var arr = [
        4,
        1,
        false,
        "mantap",
        null,
        true
    ];
    arr.push("test");
    arr.pop();
    // arr.sort();
    arr.splice(0, 6, "Mantap");
    console.log(arr.slice(0, 3));
}
function obj() {
    var AnthonyLee = {
        name: "Anthony Lee",
        age: 18,
        hobby: [
            "ngidol",
            "ngoding", {
                olahraga: ["lari", "loncat"]
            }
        ],
        alamat : {
            jalan : "Patimura",
            zipcode : 007
        }
    };
    console.log(AnthonyLee.hobby[2].olahraga);
}
obj();