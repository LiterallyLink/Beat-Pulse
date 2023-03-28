const play_state = document.getElementById('toggle');

play_state.addEventListener('click', () => {
    play_state.classList.toggle("fa-play");
    play_state.classList.toggle("fa-pause");
});
