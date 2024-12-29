/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
    const pasarSegu = (h) => {
      const vec1 = h.split(":").map(Number);
      return vec1[0] * 3600 + vec1[1] * 60 + vec1[2];
    };
    const worked = pasarSegu(timeWorked);
    const total = pasarSegu(totalTime);
    return Math.round((worked * 100) / total) + "%";
  }

  function getCompleted2(timeWorked, totalTime) {
    const [wHours, wMinutes, wSeconds] = timeWorked.split(':').map(Number)
      const [tHours, tMinutes, tSeconds] = totalTime.split(':').map(Number)
  
      /** @type {number} */
      const worked = wHours * 3600 + wMinutes * 60 + wSeconds
  
      /** @type {number} */
      const total = tHours * 3600 + tMinutes * 60 + tSeconds
  
      /** @type {string} */
      const productivity = `${Math.round((worked / total) * 100)}%`
  
      return productivity
    }
  
  /*
  ¡Santa Claus ya ha repartido todos los regalos! Ahora está revisando los informes de productividad de los elfos. Pero hay un problema: la Product Owner, Mrs. Claus 🧑‍🎄✨, necesita entender rápidamente si los elfos cumplieron con los tiempos estimados. Están haciendo Agile Scream.
  
  Para ayudar a Mrs. Claus, tu tarea es calcular el porcentaje completado de cada tarea y devolverlo redondeado al número entero más cercano. Esto le permitirá planificar mejor para la próxima Navidad y mantener a todos contentos.
  
  Esta es la función que espera:
  */
  console.log(getCompleted("48:00:00", "47:00:00")); // 33%
  console.log(getCompleted("01:00:00", "03:00:00")); // 33%
  console.log(getCompleted("02:00:00", "04:00:00")); // 50%
  console.log(getCompleted("01:00:00", "01:00:00")); // 100%
  console.log(getCompleted("00:10:00", "01:00:00")); // 17%
  console.log(getCompleted("01:10:10", "03:30:30")); // 33%
  console.log(getCompleted("03:30:30", "05:50:50")); // 60%
  
  // 🎁 Ahora Santa Claus y los elfos merecen un descanso. ¡Esperamos que hayan disfrutado el AdventJS y lo recomienden a sus amigos!
  