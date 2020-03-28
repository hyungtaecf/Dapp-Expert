function removeHash() {
    history.pushState("", document.title, window.location.pathname +
        window.location.search);
}

$(document).ready(function() {
    // getting current dapp name
    var currentDapp = localStorage.getItem("currentDapp");

    // default = WINK
    if (!currentDapp || currentDapp === "") {
        currentDapp = "WINK"
    }

    // var for random smart contracts
    var smtContracts = localStorage.getItem("smart_contracts");
    if (!smtContracts || smtContracts === "") {
        smtContracts = 18 //default
    }

    // getting hash -> dapp name
    var dappHash = window.location.hash.substr(1)
    if (dappHash && (dappHash !== "")) {
        dappHash = dappHash.replace(/%20/g, " ")
        localStorage.setItem("currentDapp", dappHash);
        currentDapp = dappHash;
        // Random number for smart contracts
        smtContracts = Math.floor(Math.random() * 50) + 1;
        localStorage.setItem("smart_contracts", smtContracts);
    }

    // 
    $('[key="$smart_contracts"]').each(function() {
        $(this).text(smtContracts)
    })

    // clearing url
    removeHash()

    // Updating labels with Dapp name
    $('[key="$current_dapp"]').each(function() {
        $(this).text(currentDapp)
    })


})