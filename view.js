export default class View {
  constructor(theme) {
    this.theme = theme;
    this.carteMain = theme.carteMain();
    this.cartePlateau = theme.cartePlateau();
    this.carteJoue = new Array();
    this.points = 0;
    this.score = this.theme.getFormatScore();

    while (this.cartePlateau[0].typeEffet.hasOwnProperty("actionAutomatique")) {
      this.score = this.cartePlateau[0].typeEffet.comptePoints(
        this.carteJoue,
        this.cartePlateau,
        this.carteJoue.length,
        this.score,
        this.carteMain,
        this.cartePlateau
      );

      this.score = this.carteJoue[0].typeEffet.comptePoints(
        this.carteJoue,
        this.cartePlateau,
        this.carteJoue.length,
        this.score,
        this.carteMain,
        this.cartePlateau
      );
      const scores = document.querySelectorAll("#score span");
      for (let i = 1; i <= 5; i++) {
        scores[i].textContent = "Score n°" + i + " : " + this.score[i - 1];
      }
      scores[0].textContent = "Totale : " + this.points;
      document
        .querySelector("#CP" + this.carteJoue.length + " span")
        .css("display", "block");
      if (this.carteJoue.length == 5) {
        alert("Votre Score est de " + this.points + " points.");
        const cartes = document.querySelectorAll("#main .carte");
        for (const c of cartes) {
          c.removeEventListener();
        }
      }
    }
    this.affichageMain();
    this.affichagePlateau();
  }

  affichageMain() {
    const main = document.querySelector("#main");
    main.innerHTML = "";
    let h = document.createElement("h4");
    h.textContent = "Votre Main :";
    main.appendChild(h);
    for (let i = 0; i < this.carteMain.length; i++) {
      let div = this.theme.affichageMain(this.carteMain[i]);
      let that = this;
      main.appendChild(div);
      div.addEventListener("click", function () {
        if (div.id == "carteSelect") {
          let index = [].indexOf.call(
            document.querySelectorAll("#main .carte"),
            this
          );
          that.carteJoue.push(that.carteMain[index]);
          that.carteMain.splice(index, 1);

          that.score = that.carteJoue[
            that.carteJoue.length - 1
          ].typeEffet.comptePoints(
            that.carteJoue,
            that.cartePlateau,
            that.carteJoue.length,
            that.score,
            that.carteMain,
            that.cartePlateau
          );

          that.score = that.cartePlateau[
            that.carteJoue.length - 1
          ].typeEffet.comptePoints(
            that.carteJoue,
            that.carteJoue,
            that.carteJoue.length,
            that.score,
            that.carteMain,
            that.cartePlateau
          );

          for (let i = 0; i < that.carteJoue.length - 1; i++) {
            if (that.carteJoue[i].typeEffet.hasOwnProperty("bonusSuivant")) {
              if (
                that.carteJoue[i].typeEffet.decalage == that.carteJoue.length
              ) {
                that.score = that.carteJoue[
                  i
                ].typeEffet.bonusSuivant.comptePoints(
                  that.carteJoue,
                  that.cartePlateau,
                  that.carteJoue.length,
                  that.score,
                  that.carteMain,
                  that.cartePlateau
                );
              }
            }
          }

          if (that.carteJoue.length < 5) {
            while (
              that.cartePlateau[that.carteJoue.length].typeEffet.hasOwnProperty(
                "actionAutomatique"
              )
            ) {
              that.score = that.carteJoue[
                that.carteJoue.length - 1
              ].typeEffet.comptePoints(
                that.carteJoue,
                that.cartePlateau,
                that.carteJoue.length,
                that.score,
                that.carteMain,
                that.cartePlateau
              );

              for (let i = 0; i < that.carteJoue.length - 1; i++) {
                if (
                  that.carteJoue[i].typeEffet.hasOwnProperty("bonusSuivant")
                ) {
                  if (
                    that.carteJoue[i].typeEffet.decalage ==
                    that.carteJoue.length
                  ) {
                    that.score = that.carteJoue[
                      i
                    ].typeEffet.bonusSuivant.comptePoints(
                      that.carteJoue,
                      that.cartePlateau,
                      that.carteJoue.length,
                      that.score,
                      that.carteMain,
                      that.cartePlateau
                    );
                  }
                }
              }

              that.score = that.cartePlateau[
                that.carteJoue.length
              ].typeEffet.comptePoints(
                that.carteJoue,
                that.cartePlateau,
                that.carteJoue.length,
                that.score,
                that.carteMain,
                that.cartePlateau
              );
            }
          }

          that.affichageMain();
          that.affichagePlateau();
          that.points = that.theme.affichageScore(that.score, that.carteJoue);
        } else {
          const carte = document.querySelectorAll("#main .carte");
          for (const c of carte) {
            c.id = null;
          }
          div.id = "carteSelect";
        }
      });
    }
  }

  affichagePlateau() {
    const plateau = document.getElementById("plateau");
    plateau.innerHTML = "";
    let h = document.createElement("h4");
    h.textContent = "Plateau :";
    plateau.appendChild(h);
    for (let i = 0; i < this.cartePlateau.length; i++) {
      let div = document.createElement("div");
      div.classList.add("carte");
      div.id = "CP" + i;
      plateau.appendChild(div);
      let carte = this.cartePlateau[i];
      if (this.carteJoue.length > i) {
        carte = this.carteJoue[i];
        let span = document.createElement("span");
        span.textContent = "Carte Jouée";
        div.appendChild(span);
        div.classList.add("pointer");
        let that = this;
        div.addEventListener("click", function () {
          if (
            document.querySelectorAll("#CP" + i + " span")[0].textContent ==
            "Carte Jouée"
          ) {
            that.theme.affichagePJ(that.cartePlateau[i], div, i, 0);
          } else {
            that.theme.affichagePJ(that.carteJoue[i], div, i, 1);
          }
        });
      }
      this.theme.affichageCP(div, carte, i, this.carteJoue.length);
    }
  }
}
