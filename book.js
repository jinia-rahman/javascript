function bookReq(book1Pub,book2Pub,book3Pub) {
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;
    const book1PubPage = book1Pub * book1Page;
    const book2PubPage = book2Pub * book2Page;
    const book3PubPage = book3Pub * book3Page;
    const totalPage = book1PubPage+book2PubPage+book3PubPage;
    return totalPage;
}
const total =bookReq(1,1,1);
console.log(total);