import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
//Nat 8 = 8 bit data type
actor class NFT(name: Text, owner:Principal,content:[Nat8]) {
    Debug.print("Hello world!");
    let itemName = name;
    let nftOwner = owner;
    let imageBytes = content;

    public query func getName(): async Text{
        return itemName;
    };
    public query func getOwner(): async Principal{
        return owner;
    };
    public query func getAsset(): async [Nat8]{
        return imageBytes;
    };   
};