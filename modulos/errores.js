function seRompe() {
  return 3 + z;
}

function seRompeAsync() {
    setTimeout(() => {
    try {
        return 3 + z;
    } catch (error) {
        console.log("Error setTimeout", error.message);
    }
    }, 1000);
}

try {
  // seRompe();
    seRompeAsync();
} catch (error) {
    console.error("Vaya algo se aha roto:: ", error.message);
}

console.log("Esto de aquí está al final");
