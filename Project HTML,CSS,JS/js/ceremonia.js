 const oscarsDate = new Date("March 16, 2025 00:00:00");

        function updateCountdown() {
            const now = new Date();
            const timeDifference = oscarsDate - now;

            if (timeDifference > 0) {
                
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

               
                document.getElementById("countdown").textContent = `${days} dni i ${hours} godzin do Oscarów!`;
            } else {
                document.getElementById("countdown").textContent = "Oscary już się odbyły!";
            }
        }

        
        setInterval(updateCountdown, 3600000);
        updateCountdown(); 