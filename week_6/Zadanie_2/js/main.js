(function() {
    class LocalDB {
        constructor(dbName) {
          this.dbName = dbName;
        }

        get(name) {
          let data = JSON.parse(window.localStorage.getItem(`${this.dbName}.${name}`));
          console.log(data);
        }

        save(name, data) {
          window.localStorage.setItem(`${this.dbName}.${name}`, JSON.stringify(data));
        }
    }
    if ("localStorage" in window) {
        var DB1 = new LocalDB("DB1");

        var andzia = {
            firstName: "Angelika",
            lastName: "Kowalska",
            age: 82
        };

        DB1.save("andzia", andzia);
        DB1.get("andzia");
    } else {
        alert("This browser is not supported!");
    }

})();
