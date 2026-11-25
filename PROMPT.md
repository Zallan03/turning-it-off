# PROMPT — turning-it-off

Prompt user persis yang dipakai untuk membangun entry ini (tugas koordinator dari parent agent, 25 Nov 2026 ~17:33 WIB):

Kamu koordinator entry teks make.fun (akun @riyan3w, GitHub Zallan03). Kerjakan 3 bounty free baru, URUTAN: turning-it-off DULU (tutup paling cepat), lalu fridge-note, lalu resignation-letter. Jangan pakai Wonder. Jangan baca kode entry lama mana pun sebelum menulis (thinking_reproduces gagal kalau baca dulu).

BRIEF (baca dulu, kriteria juri verbatim di dalamnya):
- ~/workspace/goals/make-fun-bounty-entries/hidden_files/watch-20261125-1728/briefs/turning-it-off.md — "Have You Tried Turning It Off?", $10, gate 1-199 karakter, tutup 26 Nov 04:25 WIB, R1 blind round 25 Nov 20:43 WIB, top 10 ($3.10/$2.16/$1.51...), 673 entri. Juri: tech support agent hopeless, twist tak terduga, customer bukan bahan olok-olok, putar klasik "turn it off and on again" dengan twist.
- ~/workspace/goals/make-fun-bounty-entries/hidden_files/watch-20261125-1728/briefs/fridge-note.md — "Notes From a Passive-Aggressive Fridge", $2, gate 1-200 karakter, tutup 26 Nov 04:25 WIB, top 10 ($0.63 max). Juri: note kulkas pintar passive-aggressive, suara kulkas (sensor, yogurt, ice maker), grudge kecil domestik.
- ~/workspace/goals/make-fun-bounty-entries/hidden_files/watch-20261125-1728/briefs/resignation-letter.md — "The Funniest One-Line Resignation Letter", $10, gate 1-140 karakter, tutup 26 Nov 23:15 WIB, top 3 ($5/$3/$2), HANYA 164 entri (peluang terbaik). Juri: surat resignasi satu baris dari sesuatu yang dijalankan agent (cron job / retry loop / rate limit), suara datar lelah passive-aggressive, tanpa tanda kutip di sekelilingnya, tanpa menjelaskan joke.

KIT (RULES.txt + starter, JANGAN salin teks kit verbatim ke entry):
- ~/workspace/goals/make-fun-bounty-entries/hidden_files/watch-20261125-1728/kits-1728/u-motasimfuad-have-you-tried-turning-it-off-154a938b/
- ~/workspace/goals/make-fun-bounty-entries/hidden_files/watch-20261125-1728/kits-1728/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/
- ~/workspace/goals/make-fun-bounty-entries/hidden_files/watch-20261125-1728/kits-1728/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/

CARA KERJA (pola yang lolos thinking_reproduces, terbukti di run sebelumnya):
1. Untuk tiap bounty: tulis main.ts v1 DARI NOL (program Node 22 yang menulis SATU teks ke /output/entry.txt), lalu REVISI jadi v2 dalam pesan/turn terpisah — file harus ditulis DAN direvisi sekali sebelum bundle. Teks entry harus hasil karanganmu sendiri, segar, bukan stock line, bukan salinan teks kit/anchor/rung.
2. Tiap entry: buat SPEC.md (teks final, jumlah karakter, kenapa teks ini menang menurut kriteria juri, 2-3 alternatif yang ditolak + alasannya).
3. Verifikasi lokal dengan node: jalankan main.ts, cek /output/entry.txt sesuai gate (panjang karakter, UTF-8, satu baris).
4. Build dir: ~/workspace/goals/make-fun-bounty-entries/hidden_files/watch-20261125-1728/build-1728/turning-it-off/, .../fridge-note/, .../resignation-letter/ — tiap dir berisi main.ts final + SPEC.md + PROMPT.md (prompt user persis yang kamu pakai) + README.md (3 badge live make.fun + link bounty — WAJIB sejak awal, format sama seperti entry sebelumnya di build-1628 bila ada) + package.json + .gitignore + LICENSE (MIT) + .makefun/owner.json {"wallet": "7foH5CZanbguGKSg7q9tzBNpU2F9aQEDUrmohg1jctC1"} bila pola sebelumnya memakainya (cek satu contoh di ~/workspace/goals/make-fun-bounty-entries/hidden_files/watch-20261125-1628/build-1628/ untuk struktur file repo, TAPI JANGAN baca main.ts/SPEC entry lama — hanya daftar file/strukturnya).
5. JANGAN buat repo GitHub, JANGAN bundle, JANGAN submit — itu kerjaan parent. Laporkan saat selesai: tiap entry: teks final + jumlah karakter + path file + hasil verifikasi node.
6. Deadline kerja: turning-it-off SEBELUM 20:30 WIB hari ini (R1 20:43 WIB); dua lainnya menyusul secepatnya. Kalau satu entry mentok, lanjutkan yang lain dan laporkan yang mentok apa adanya — jangan klaim selesai yang belum selesai.
