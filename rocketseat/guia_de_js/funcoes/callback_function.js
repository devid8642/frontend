function f(f) {
    console.log("Código antes de f");
    f();
    console.log("Código depois de f");
}

f(
    () => {
        console.log("Estou em uma callback");
    }
);