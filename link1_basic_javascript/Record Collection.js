// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
  
    //deleting is working
    if(value === ""){
      delete records[id][prop];
    }
  
    if(prop !== "tracks" && value !== ""){
      records[id][prop] = value
    }
  
    // if(prop === "tracks" && value !== "" && !records[id].hasOwnProperty(prop)){
    //   var arr = [value];
    //   records[id][prop] = arr;
    //   console.log(records[id]["tracks"])
    // }
  
    if(prop === "tracks" && value !== ""){
      if(records[id].hasOwnProperty(prop)){
        records[id][prop].push(value);
      }else{
        var arr = [];
        arr.push(value);
        records[id][prop] = arr;
      }
    }  
  
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');