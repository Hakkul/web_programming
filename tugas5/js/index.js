const searchForm = document.querySelector('#search-form');
const usernameInput = document.querySelector('#username-input');
const loadingElement = document.querySelector('#loading');
const errorMessage = document.querySelector('#error-message');
const profileContainer = document.querySelector('#profile-container');
const hilangkanh1 = document.querySelector('#missing-container')
const backBtn = document.querySelector('#back-btn');
const eror404 = document.querySelector('#img-erorr')
const btneror = document.querySelector('#btn-erorr')

// Elemen detail profil
const profileAvatar = document.querySelector('#profile-avatar');
const profileName = document.querySelector('#profile-name');
const profileUsername = document.querySelector('#profile-username');
const profileBio = document.querySelector('#profile-bio');
const profileRepos = document.querySelector('#profile-repos');
const profileLink = document.querySelector('#profile-link');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Mencegah halaman melakukan reload saat form dikirim
    
    const username = usernameInput.value.trim();
    if (!username) return;

    // Reset tampilan & tampilkan indikator loading
    loadingElement.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    profileContainer.classList.add('hidden');

    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Melakukan request ke API publik GitHub
        const response = await fetch(`https://api.github.com/users/${username}`);

        // Menangani kondisi jika user tidak ditemukan (Status 404)
        if (response.status === 404) {
            throw new Error("User tidak ditemukan!");
    
        }

        // Menangani error lainnya
        if (!response.ok) {
            throw new Error("Terjadi kesalahan pada server.");
        }

        const data = await response.json();

        // Menampilkan data ke elemen HTML
        profileAvatar.src = data.avatar_url;
        profileName.textContent = data.name ? data.name : "Nama tidak tersedia";
        profileUsername.textContent = `@${data.login}`;
        profileBio.textContent = data.bio ? data.bio : "Tidak ada bio yang tersedia.";
        profileRepos.textContent = data.public_repos;
        profileLink.href = data.html_url;

        // Tampilkan kotak profil
        profileContainer.classList.remove('hidden');

        // Menyembunyikan h1 dan form
        searchForm.style.display = 'none'
        hilangkanh1.style.display = 'none'

    } catch (error) {
        // Menampilkan pesan error jika gagal / user tidak ditemukan
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('hidden');
        eror404.classList.remove('hidden')
        searchForm.style.display = 'none'
        hilangkanh1.style.display = 'none'
        // contaonerEror.classList.remove('hidden')

        // menyebunyikan di tampilan awal
        btneror.classList.remove('hidden')

        // aksi tombol ketika di klik
        btneror.addEventListener('click', () => {
        errorMessage.classList.add('hidden')
        eror404.classList.add('hidden')
        btneror.classList.add('hidden')
        // contaonerEror.classList.add('hidden')
        usernameInput.value = ''
        usernameInput.focus()
        searchForm.style.display = 'flex'
        hilangkanh1.style.display = 'block'
        })

    } finally {
        // Sembunyikan loading setelah proses selesai (baik berhasil maupun gagal)
        loadingElement.classList.add('hidden');
        
    }
});

  backBtn.addEventListener('click', () => {
    console.log('Tombol berhasil di klik')
        profileContainer.classList.add('hidden')
        searchForm.classList.remove('hidden')
        usernameInput.value = ''
        usernameInput.focus()
        searchForm.style.display = 'flex'
        hilangkanh1.style.display = 'block'
});

