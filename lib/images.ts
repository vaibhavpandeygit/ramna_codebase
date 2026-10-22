function unsplash(id: string, width: number) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

function pexels(id: string, width: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

function wiki(path: string) {
  const file = path.split("/").pop();
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/1280px-${file}`;
}

const seats = pexels("20849161", 1600);

export const images = {
  hero: pexels("5229277", 2200),
  about: seats,
  inspiration: pexels("7241844", 1800),
  services: {
    intercity: unsplash("photo-1557223562-6c77ef16210f", 1800),
    group: pexels("7241844", 1400),
    private: unsplash("photo-1544620347-c4fd4a3d5957", 1600),
    assistance: seats,
  },
  destinations: {
    patna: wiki("d/db/The_Evening_View_from_Ghandhi_Ghat_Patna_01.jpg"),
    bodhGaya: wiki("6/63/Mahabodhi_Temple%2C_Bodh_Gaya%2C_Bihar%2C_India.jpg"),
    nalanda: wiki("5/59/Temple_3_-_Sariputta_Stupa_-_Nalanda_Mahavihara_%2810%29.jpg"),
    rajgir: wiki("f/f8/Jain_Shrine_Ruins_-_Vaibhar_Hills_-_Rajgir_06.jpg"),
    vaishali: wiki("f/fe/Ashoka_pillar_at_Vaishali%2C_Bihar%2C_India.jpg"),
    madhubani: wiki("5/51/Madhubani_painting_by_Bhuvana_Meenakshi.jpg"),
  },
} as const;
