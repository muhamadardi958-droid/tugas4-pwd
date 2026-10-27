function hitungSegitiga(alas, tinggi, sisiA, sisiB, sisiC) {
  const luas = 0.5 * alas * tinggi;
  const keliling = sisiA + sisiB + sisiC;

  console.log(" A.SGITIGA ");
  console.log(`Luas     : ${luas}`);
  console.log(`Keliling : ${keliling}\n`);
}


function hitungPersegiPanjang(panjang, lebar) {
  const luas = panjang * lebar;
  const keliling = 2 * (panjang + lebar);

  console.log(" B.PERSEGI PANJANG ");
  console.log(`Luas     : ${luas}`);
  console.log(`Keliling : ${keliling}\n`);
}


function hitungPrismaSegitiga(alasSegitiga, tinggiSegitiga, sisiA, sisiB, sisiC, tinggiPrisma) {
  const luasAlas = 0.5 * alasSegitiga * tinggiSegitiga;
  const kelilingAlas = sisiA + sisiB + sisiC;
  
  const luasPermukaan = (2 * luasAlas) + (kelilingAlas * tinggiPrisma);
  const volume = luasAlas * tinggiPrisma;

  console.log(" C.PRISMA ");
  console.log(`Luas      : ${luasPermukaan}`);
  console.log(`Keliling  : ${2 * kelilingAlas + 3 * tinggiPrisma}`);
  console.log(`Volume    : ${volume}\n`);
}


function hitungLimasSegiEmpat(panjangAlas, lebarAlas, tinggiLimas, tinggiMiringA, tinggiMiringB) {
  const luasAlas = panjangAlas * lebarAlas;
  const luasPermukaan = luasAlas + (2 * (0.5 * panjangAlas * tinggiMiringA)) + (2 * (0.5 * lebarAlas * tinggiMiringB));
  const volume = (1 / 3) * luasAlas * tinggiLimas;

  console.log(" D.LIMAS ");
  console.log(`Luas     : ${luasPermukaan}`);
  console.log(`Volume   : ${volume}\n`);
}


function hitungSegitigaSembarang(sisiA, sisiB, sisiC) {
  const keliling = sisiA + sisiB + sisiC;
  const s = keliling / 2; 
  const luas = Math.sqrt(s * (s - sisiA) * (s - sisiB) * (s - sisiC));

  console.log(" E.Segitiga Sembarang ");
  console.log(`Luas     : ${luas.toFixed(2)}`);
  console.log(`Keliling : ${keliling}\n`);
}

//pemanggialn fungsi
hitungSegitiga(6, 8, 6, 8, 10);
hitungPersegiPanjang(10, 5);
hitungPrismaSegitiga(6, 8, 6, 8, 10, 12);
hitungLimasSegiEmpat(8, 6, 10, 10.44, 10.77);
hitungSegitigaSembarang(7, 8, 9);