//const TOKEN = "8606764820:AAEspn_sqtcX9pxjE2ZZfTKRhDvHP1maX08";
//const CHAT_ID = "5266568060";
//
//function openModal() {
//    document.getElementById('modal').classList.remove('hidden');
//}
//
//function closeModal() {
//    document.getElementById('modal').classList.add('hidden');
//}
//
//function sendOrder() {
//    let name = document.getElementById('name').value;
//    let phone = document.getElementById('phone').value;
//
//    if (!name || !phone) {
//        alert("Iltimos, hamma maydonni to‘ldiring!");
//        return;
//    }
//
//    let text = `🪟 Yangi buyurtma!\n\n👤 Ism: ${name}\n📞 Telefon: ${phone}`;
//
//    fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
//        method: "POST",
//        headers: { "Content-Type": "application/json" },
//        body: JSON.stringify({
//            chat_id: CHAT_ID,
//            text: text
//        })
//    })
//    .then(res => {
//        alert("✅ Yuborildi!");
//        closeModal();
//    })
//    .catch(err => {
//        alert("❌ Xatolik!");
//    });
//}