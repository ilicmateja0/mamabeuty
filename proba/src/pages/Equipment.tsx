import React from 'react';

const Equipment = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="section-title">Naša Oprema</h2>
          <p className="section-subtitle">
            U MAMA Beauty salonu koristimo najsavremeniju opremu i proizvode najboljih proizvođača kako bismo vam pružili najbolje rezultate.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
            <div className="card hover-card">
              <div className="overflow-hidden rounded-t-xl h-80">
                <source
                  srcSet="/assets/images/equipment/ATON-magnum.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/images/equipment/ATON-magnum.webp"
                  alt="ATON magnum"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <dt className="text-2xl font-bold leading-7 text-yellow-900 mb-4">
                  ATON MAGNUM
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-yellow-700">
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Opis:</h4>
                    <p className="mt-2 text-sm">
                      ATON Magnum je visokoenergetski diodni laser sa 4 talasne dužine (755nm, 808nm, 940nm, 1064nm) i snagom od 1600W. Ova tehnologija omogućava efikasno uklanjanje dlaka sa dubokim korenom i dodatnu termalnu obradu folikula.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Specifikacije:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Tip lasera: Diodni laser</li>
                      <li>Talasna dužina: 755-808-940-1064 nm</li>
                      <li>Nominalna snaga: 2500W</li>
                      <li>Snaga laserske diode: 1600W</li>
                      <li>Energija: 1-120 J/cm2 podesivo</li>
                      <li>Frekvencija: 0.5-10 Hz</li>
                      <li>Širina pulsa: 8-685ms podesivo</li>
                      <li>Veličina sonde: 12 x 20mm2</li>
                      <li>Napon: 220V</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Prednosti:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Izvanredni rezultati - diodni laseri su priznati kao najefikasniji za trajnu epilaciju</li>
                      <li>Izuzetno efikasni tretmani - rezultati mogu biti zadovoljavajući već nakon 3-4 tretmana</li>
                      <li>Brzo izvođenje tretmana - frekvencija okidanja do 10ms</li>
                      <li>Bezbolni tretmani - sonde sa pojačanim hlađenjem</li>
                      <li>Pouzdan i konstantan u radu</li>
                    </ul>
                  </div>
                </dd>
              </div>
            </div>
            
            <div className="card hover-card">
              <div className="overflow-hidden rounded-t-xl h-80">
                <source
                  srcSet="/assets/images/equipment/vakum-machine.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/images/equipment/vakum-machine.webp"
                  alt="Vakum mašina"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <dt className="text-2xl font-bold leading-7 text-yellow-900 mb-4">
                  Aparat za Vakum tretmane
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-yellow-700">
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Opis:</h4>
                    <p className="mt-2 text-sm">
                      Vakum aparat je namenjen masaži i negi tela, mršavljenju, smanjenju celulita i masnih naslaga, poboljšanje limfe, hormonskoj terapiji, izbacivanju viška vode i toksina iz tela, zatezanju kože lica, vrata i dekoltea, boljoj apsorpciji preparata, podizanju zadnjice i grudi, terapeutskoj masaži leđa. Sa njime se može izvoditi preko 10 različitih tretmana lica i tela.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Specifikacije:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Voltaža: 100-240V</li>
                      <li>Radna snaga: 65W</li>
                      <li>16 staklenih ventuza</li>
                      <li>3 sonde za masažu</li>
                      <li>3 vrste kupa za podizanje grudi i brazilsko podizanje zadnjice</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Primena:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Masaža i nega tela</li>
                      <li>Mršavljenje i smanjenje celulita</li>
                      <li>Poboljšanje limfe i hormonska terapija</li>
                      <li>Zatezanje kože lica, vrata i dekoltea</li>
                      <li>Podizanje zadnjice i grudi</li>
                      <li>Terapeutska masaža leđa</li>
                    </ul>
                  </div>
                </dd>
              </div>
            </div>
            
            <div className="card hover-card">
              <div className="overflow-hidden rounded-t-xl h-80">
                <source
                  srcSet="/assets/images/equipment/AI-MAX-2.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/images/equipment/AI-MAX-2.webp"
                  alt="AI MAX 2"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <dt className="text-2xl font-bold leading-7 text-yellow-900 mb-4">
                  AI SKINMAX
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-yellow-700">
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Opis:</h4>
                    <p className="mt-2 text-sm">
                      Aparat AI SKINMAX, pametni detektor, koristi najmoderniju veštačku inteligenciju za analizu i tumačenje podataka o stanju kože, pružajući precizne i tačne podatke. Aparat sadrži u sebi skener visoke rezolucije koji omogućava dubinsku i temeljnu analizu kože lica.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Specifikacije:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Tehnologija: AI kamera</li>
                      <li>Broj sočiva: 40</li>
                      <li>Broj piksela: 32 miliona</li>
                      <li>Ekran: 13,3" ili 21"</li>
                      <li>Memorija: Cloud</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Funkcionalnosti:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Površina kože se skenira po 8 parametara: sebum, pore, bore, akne, pigmetne promene, miteseri, tamni podočnjaci, boja kože</li>
                      <li>Nakon analize klijent dobija izveštaj o vrsti i procenjenoj starosti kože</li>
                      <li>Prikaz 3D skena problematičnog dela kože i preporuku za negu</li>
                      <li>Analiza podataka i izveštaj za svaki od parametara se može sačuvati na cloud-u</li>
                    </ul>
                  </div>
                </dd>
              </div>
            </div>
            
            <div className="card hover-card">
              <div className="overflow-hidden rounded-t-xl h-80">
                <source
                  srcSet="/assets/images/equipment/EM-CHAIR-PRO-1.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/images/equipment/EM-CHAIR-PRO-1.webp"
                  alt="EM CHAIR PRO 1"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <dt className="text-2xl font-bold leading-7 text-yellow-900 mb-4">
                  EMP CHAIR PRO
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-yellow-700">
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Opis:</h4>
                    <p className="mt-2 text-sm">
                      Zahvaljujući revolucionarnoj HI-EMP tehnologiji, EMP CHAIR PRO stolica olakšava i/ili sprečava problem oslabljenih mišića karličnog dna. Samo jednim tretmanom postiže se 12.000 mišićnih kontrakcija. To direktno utiče na promenu mišićne strukture i dovodi do mišićne hipertrofije (povećanje zapremine mišića) i hiperplaziju (stvaranje novih mišićnih vlakana), što dovodi do jačanja čitave strukture mišića karličnog dna.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Specifikacije:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Tehnologija: elektromagnetno polje</li>
                      <li>Magnetno polje: 7.0 tesla</li>
                      <li>Boja: crna, bela, plava</li>
                      <li>Dimenzije: (Š x V x D) 78x68x68cm</li>
                      <li>Ekran: 16.51cm</li>
                      <li>Težina: 50kg</li>
                      <li>Napon: 230 V/ 50 Hz</li>
                      <li>Snaga: 1500W</li>
                      <li>Radna temperatura: 5-40°C</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Primena:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Bolovi u leđima - jačanje mišića karličnog dna ublažava i sprečava bolove u leđima</li>
                      <li>Inkontinencija - pogodna za sve vrste inkontinencija</li>
                    </ul>
                  </div>
                </dd>
              </div>
            </div>
            
            <div className="card hover-card">
              <div className="overflow-hidden rounded-t-xl h-80">
                <source
                  srcSet="/assets/images/equipment/termo-cebe.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/images/equipment/termo-cebe.webp"
                  alt="Termo ćebe"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <dt className="text-2xl font-bold leading-7 text-yellow-900 mb-4">
                  BEAUTY DEVICE Termo ćebe za tretmane tela MS 2016
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-yellow-700">
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Opis:</h4>
                    <p className="mt-2 text-sm">
                      Termo ćebe za tretmane tela MS 2016 je profesionalni aparat za termoterapiju koji omogućava dubinsko zagrevanje tela. Ova termo ćeba je idealna za relaksaciju, ublažavanje bolova u mišićima i zglobovima, poboljšanje cirkulacije krvi i limfe, kao i za mršavljenje i smanjenje celulita.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Specifikacije:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Tehnologija: Termoterapija</li>
                      <li>Snaga: 2000W</li>
                      <li>Napon: 220-240V</li>
                      <li>Frekvencija: 50Hz</li>
                      <li>Dimenzije: 200 x 80 x 5 cm</li>
                      <li>Težina: 3.5 kg</li>
                      <li>Materijal: Visokokvalitetni tekstil sa termalnim slojem</li>
                      <li>Regulacija temperature: 30-70°C</li>
                      <li>Vreme zagrevanja: 5-10 minuta</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Prednosti:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Dubinsko zagrevanje tela za bolju apsorpciju preparata</li>
                      <li>Poboljšanje cirkulacije krvi i limfe</li>
                      <li>Ublažavanje bolova u mišićima i zglobovima</li>
                      <li>Relaksacija i opuštanje mišića</li>
                      <li>Pomoć u mršavljenju i smanjenju celulita</li>
                      <li>Podešavanje temperature prema potrebama klijenta</li>
                    </ul>
                  </div>
                </dd>
              </div>
            </div>
            
            <div className="card hover-card">
              <div className="overflow-hidden rounded-t-xl h-80">
                <source
                  srcSet="/assets/images/equipment/led-lampa.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/images/equipment/led-lampa.webp"
                  alt="LED lampa"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <dt className="text-2xl font-bold leading-7 text-yellow-900 mb-4">
                  LED lampa za tretmane lica i tela
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-yellow-700">
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Opis:</h4>
                    <p className="mt-2 text-sm">
                      LED lampa je profesionalni aparat za fototerapiju koji koristi različite talasne dužine svetlosti za različite tretmane lica i tela. Ova tehnologija omogućava dubinsku penetraciju svetlosti u kožu, što dovodi do brojnih pozitivnih efekata.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Prednosti:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Stimulacija proizvodnje kolagena i elastina</li>
                      <li>Poboljšanje cirkulacije krvi i limfe</li>
                      <li>Ublažavanje upala i akni</li>
                      <li>Regeneracija kože i zatezanje</li>
                      <li>Uklanjanje pigmentnih promena</li>
                      <li>Bezbolni i neinvazivni tretmani</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Primena:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Anti-aging tretmani lica</li>
                      <li>Tretmani akni i problematične kože</li>
                      <li>Regeneracija kože nakon sunčanja</li>
                      <li>Uklanjanje pigmentnih promena</li>
                      <li>Zatezanje kože i smanjenje bora</li>
                      <li>Pomoć u zarastanju rana</li>
                    </ul>
                  </div>
                </dd>
              </div>
            </div>
            
            <div className="card hover-card">
              <div className="overflow-hidden rounded-t-xl h-80">
                <source
                  srcSet="/assets/images/equipment/solarijum.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/images/equipment/solarijum.webp"
                  alt="Solarijum"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <dt className="text-2xl font-bold leading-7 text-yellow-900 mb-4">
                  megaSun 5600 Ultra Power - Ležeći solarijum
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-yellow-700">
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Opis:</h4>
                    <p className="mt-2 text-sm">
                      megaSun 5600 Ultra Power je profesionalni ležeći solarijum koji pruža optimalno sunčanje uz najsavremeniju tehnologiju. Ovaj model je idealan za salone lepote i studije za sunčanje, pružajući brze i efikasne tretmane sunčanja.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Specifikacije:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Lampe za telo u gornjoj ploči: 26 X 160W</li>
                      <li>Lampe za telo u donjoj ploči: 18 X 160W</li>
                      <li>Lampe za lice: 4 X 500W</li>
                      <li>Klima: DA</li>
                      <li>Snaga: 12 KWh</li>
                      <li>Cev za ventilaciju: 300mm</li>
                      <li>Osigurači: 3x25A</li>
                      <li>Dimenzije zatvoren: 2.360mm X 1.260mm X 1.400mm</li>
                    </ul>
                  </div>
                </dd>
              </div>
            </div>
            
            <div className="card hover-card">
              <div className="overflow-hidden rounded-t-xl h-80">
                <source
                  srcSet="/assets/images/equipment/rolosfera.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/images/equipment/rolosfera.webp"
                  alt="Rolosfera"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <dt className="text-2xl font-bold leading-7 text-yellow-900 mb-4">
                  RoloSfera - Aparat za tretmane tela
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-yellow-700">
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Opis:</h4>
                    <p className="mt-2 text-sm">
                      RoloSfera je revolucionarni aparat za tretmane tela koji pruža brze i vidljive rezultate uz minimalan napor. Ovaj aparat je savršen za sve vrste salona i tretmane koji zahtevaju maksimalne rezultate.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Prednosti:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Efikasno smanjenje celulita i oblikovanje tela</li>
                      <li>Poboljšava tonus kože i povećava cirkulaciju</li>
                      <li>Limfna drenaža koja pomaže u eliminaciji toksina</li>
                      <li>Laka primena i dugotrajni rezultati</li>
                      <li>Bezbolni i neinvazivni tretmani</li>
                      <li>Brzi i vidljivi rezultati nakon nekoliko tretmana</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Primena:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Tretmani za smanjenje celulita</li>
                      <li>Oblikovanje tela i mršavljenje</li>
                      <li>Poboljšanje tonusa kože</li>
                      <li>Limfna drenaža i eliminacija toksina</li>
                      <li>Zatezanje kože i smanjenje bora</li>
                      <li>Poboljšanje cirkulacije krvi i limfe</li>
                    </ul>
                  </div>
                </dd>
              </div>
            </div>
            
            <div className="card hover-card">
              <div className="overflow-hidden rounded-t-xl h-80">
                <source
                  srcSet="/assets/images/equipment/mega-sun.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/images/equipment/mega-sun.webp"
                  alt="Mega sun"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <dt className="text-2xl font-bold leading-7 text-yellow-900 mb-4">
                  megaSun 6800 Ultra Power - Ležeći solarijum
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-yellow-700">
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Opis:</h4>
                    <p className="mt-2 text-sm">
                      megaSun 6800 Ultra Power je premium ležeći solarijum koji pruža optimalno sunčanje uz najsavremeniju tehnologiju. Ovaj model je idealan za salone lepote i studije za sunčanje, pružajući brze i efikasne tretmane sunčanja uz dodatne funkcionalnosti za komfor korisnika.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Specifikacije:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Lampe: 2 x 250W (ramena), 24 x 160W (gornja ploča), 20 x 160W (donja ploča), 4 x 500W (lice)</li>
                      <li>Dodatne funkcionalnosti: Aqua Cool, Aroma, Mega Voice, Mp3 Sound Box, zvučnici, klima</li>
                      <li>Snaga: 11 KWh</li>
                      <li>Ventilacija: 300mm cev</li>
                      <li>Osigurači: 3x25A</li>
                      <li>Dimenzije: 2.380mm x 1.430mm x 1.530mm (zatvoren), 2.380mm x 1.430mm x 1.940mm (otvoren)</li>
                    </ul>
                  </div>
                </dd>
              </div>
            </div>
            
            <div className="card hover-card">
              <div className="overflow-hidden rounded-t-xl h-80">
                <source
                  srcSet="/assets/images/equipment/limfna-drenaza.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/images/equipment/limfna-drenaza.webp"
                  alt="Limfna drenaža"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <dt className="text-2xl font-bold leading-7 text-yellow-900 mb-4">
                  Ballancer 606 - Aparaturna limfna drenaža
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-yellow-700">
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Opis:</h4>
                    <p className="mt-2 text-sm">
                      Ballancer 606 je najbolji aparat na svetu za estetsku limfnu drenažu koji u kratkom vremenskom periodu pomaže da iz organizma uklonite višak vode i tečnosti, ubrzate protok limfe i cirkulaciju. Pomaže u prevenciji i smanjenju celulita koji može da predstavlja prilično opterećenje, posebno u letnjim danima kada želimo da pokažemo savršeno izvajano telo.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Prednosti:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Detoksikacija organizma (eliminisanje viška vode i toksina)</li>
                      <li>Povećanje protoka limfe i venske cirkulacije</li>
                      <li>Prevencija pojave i redukcije celulita</li>
                      <li>Povećanje uspešnosti dejstva drugih procedura kao što su RF, anticelulit shock wave tretmani, kavitacija</li>
                      <li>Stimulacija kolagena u dubljim slojevima kože i povećanje elastičnosti i čvrstine kože</li>
                      <li>Regeneracija i oporavak (uklanja se laktat iz mišića)</li>
                      <li>Pomoć u redukciji tečnosti u procedurama za smanjenju težine</li>
                      <li>Smanjenje obima i oblikovanje tela</li>
                      <li>Poboljšanje imuniteta i opšteg stanja organizma</li>
                      <li>Otklanjanje tegoba kod pacijenata natečenih, umornih, teških nogu</li>
                      <li>Stimulacija metabolizma ćelija kože</li>
                      <li>Ublažavanje napetosti i stresa</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium text-yellow-900">Preporuke za tretmane:</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                      <li>Preventivno u očuvanju zdravlja i opšteg stanja organizma, tretman limfne drenaže možete koristiti barem jednom nedeljno</li>
                      <li>Preporučuje se 10 limfnih drenaža tokom nekoliko nedelja za optimalne rezultate</li>
                      <li>Pet presoterapija je minimalni preporučeni broj tretmana</li>
                      <li>Između dve limfne drenaže bi trebalo napraviti pauzu od najmanje 48h</li>
                      <li>Trajanje tretmana je od 20 do 45 minuta u zavisnosti od procene stručnjaka</li>
                    </ul>
                  </div>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Equipment; 