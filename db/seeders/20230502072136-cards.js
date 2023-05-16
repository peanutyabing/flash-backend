"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "cards",
      [
        {
          user_id: 1,
          deck_id: 1,
          front: "悲惨",
          back: "Sad, miserable (bēi cǎn)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 1,
          front: "翠",
          back: "Emrald green (cuì)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 1,
          front: "仿佛",
          back: "Just like, as if (fǎng fú)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 1,
          front: "赤",
          back: "Red (chì)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 1,
          front: "湛蓝",
          back: "Pure blue, especially for describing the sky or the ocean (zhàn lán)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 1,
          front: "墨",
          back: "Ink, or ink black (mò)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 1,
          front: "衬衫",
          back: "Shirt (chèn shān)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 1,
          front: "叮嘱",
          back: "To urge repeatedly (dīng zhǔ)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 1,
          front: "熟悉",
          back: "Familiar (shú xī)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 1,
          front: "欧洲",
          back: "Europe (ōu zhōu)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 1,
          front: "邀宠",
          back: "Courting favor with powerful individuals (yāo chǒng)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 1,
          front: "勤勉",
          back: "Diligent, industrious (qín miǎn)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 2,
          front: "stor",
          back: "big",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 2,
          front: "lång",
          back: "long",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 2,
          front: "trött",
          back: "tired",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 2,
          front: "liten",
          back: "small",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 2,
          front: "litet",
          back: "small",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 2,
          front: "små",
          back: "small",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 2,
          front: "lilla",
          back: "small (plural)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 3,
          front: "悲伤",
          back: "Sad (bēi shāng)",
          number_of_times_seen: 6,
          number_of_times_correct: 4,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 3,
          front: "绿色",
          back: "Green (lǜ sè)",
          number_of_times_seen: 5,
          number_of_times_correct: 4,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 3,
          front: "红色",
          back: "Red (hóng sè)",
          number_of_times_seen: 5,
          number_of_times_correct: 5,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 3,
          front: "蓝色",
          back: "Blue (lán sè)",
          number_of_times_seen: 5,
          number_of_times_correct: 4,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 3,
          front: "黑色",
          back: "Black (hēi sè)",
          number_of_times_seen: 5,
          number_of_times_correct: 4,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 3,
          front: "衬衫",
          back: "Shirt (chèn shān)",
          number_of_times_seen: 5,
          number_of_times_correct: 5,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 3,
          front: "欧洲",
          back: "Europe (ōu zhōu)",
          number_of_times_seen: 5,
          number_of_times_correct: 4,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 4,
          front: "en katt",
          back: "a cat",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 4,
          front: "en hund",
          back: "a dog",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 4,
          front: "en fågel",
          back: "a bird",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 4,
          front: "en skölpadda",
          back: "a turtle",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 5,
          front: "gourmetmat",
          back: "Goo-mehr-maht (Gourmet food)",
          number_of_times_seen: 3,
          number_of_times_correct: 2,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 5,
          front: "färskvaror",
          back: "Fersk-vah-rohr (Fresh produce)",
          number_of_times_seen: 4,
          number_of_times_correct: 1,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 5,
          front: "fiskrätt",
          back: "Feesk-ret (Fish dish)",
          number_of_times_seen: 3,
          number_of_times_correct: 2,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 6,
          front: "lång",
          back: "long",
          number_of_times_seen: 2,
          number_of_times_correct: 2,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 6,
          front: "stor",
          back: "big",
          number_of_times_seen: 2,
          number_of_times_correct: 2,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 6,
          front: "litet",
          back: "small",
          number_of_times_seen: 1,
          number_of_times_correct: 1,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 6,
          front: "liten",
          back: "small",
          number_of_times_seen: 1,
          number_of_times_correct: 1,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 6,
          front: "trött",
          back: "tired",
          number_of_times_seen: 1,
          number_of_times_correct: 1,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 6,
          front: "små",
          back: "small",
          number_of_times_seen: 1,
          number_of_times_correct: 1,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 7,
          front: "le restaurant",
          back: "the restaurant",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 7,
          front: "le dîner",
          back: "the dinner",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 7,
          front: "la crème",
          back: "the cream",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 7,
          front: "gôuter",
          back: "to taste (e.g. taste something, or something tastes good)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 7,
          front: "la vanille",
          back: "the vanilla",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 7,
          front: "j'ai faim",
          back: "I am hungry.",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 8,
          front: "nötkött",
          back: "beef",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 8,
          front: "öl",
          back: "beer",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 8,
          front: "bröd",
          back: "bread",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 8,
          front: "kaka",
          back: "cookie",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 8,
          front: "tårta",
          back: "cake",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 8,
          front: "middag",
          back: "dinner",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 8,
          front: "frukost",
          back: "breakfast",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 8,
          front: "lunch",
          back: "lunch",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 8,
          front: "salt",
          back: "salt",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          deck_id: 8,
          front: "peppar",
          back: "pepper",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 9,
          front: "案件",
          back: "a (legal) case",
          number_of_times_seen: 2,
          number_of_times_correct: 2,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 9,
          front: "检察官",
          back: "the prosecutor",
          number_of_times_seen: 3,
          number_of_times_correct: 2,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 9,
          front: "法院",
          back: "the court",
          number_of_times_seen: 2,
          number_of_times_correct: 2,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 9,
          front: "法庭",
          back: "the courtroom",
          number_of_times_seen: 2,
          number_of_times_correct: 2,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 9,
          front: "法官",
          back: "the judge",
          number_of_times_seen: 2,
          number_of_times_correct: 2,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 9,
          front: "律师",
          back: "the lawyer",
          number_of_times_seen: 2,
          number_of_times_correct: 2,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 10,
          front: "案件",
          back: "a (legal) case",
          number_of_times_seen: 23,
          number_of_times_correct: 23,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 10,
          front: "检察官",
          back: "the prosecutor",
          number_of_times_seen: 18,
          number_of_times_correct: 18,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 10,
          front: "法庭",
          back: "the courtroom",
          number_of_times_seen: 22,
          number_of_times_correct: 22,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 10,
          front: "法院",
          back: "the court",
          number_of_times_seen: 19,
          number_of_times_correct: 19,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 10,
          front: "律师",
          back: "the lawyer",
          number_of_times_seen: 20,
          number_of_times_correct: 20,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          deck_id: 10,
          front: "法官",
          back: "the judge",
          number_of_times_seen: 20,
          number_of_times_correct: 19,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 11,
          front: "litet",
          back: "small",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 11,
          front: "liten",
          back: "small",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 11,
          front: "trött",
          back: "tired",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 11,
          front: "små",
          back: "small",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 11,
          front: "lång",
          back: "long",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 11,
          front: "lilla",
          back: "small (plural)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          deck_id: 11,
          front: "stor",
          back: "big",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 12,
          front: "le restaurant",
          back: "the restaurant",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 12,
          front: "le dîner",
          back: "the dinner",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 12,
          front: "la crème",
          back: "the cream",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 12,
          front: "gôuter",
          back: "to taste (e.g. taste something, or something tastes good)",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 12,
          front: "j'ai faim",
          back: "I am hungry.",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 12,
          front: "la vanille",
          back: "the vanilla",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 13,
          front: "un magasin",
          back: "a store",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 13,
          front: "une vendeuse",
          back: "a female salesperson",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 13,
          front: "un vendeur",
          back: "a male salesperson",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 13,
          front: "un portant",
          back: "a rack",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 13,
          front: "un vêtement",
          back: "a piece of clothing",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 13,
          front: "des ceintres",
          back: "hangers",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 13,
          front: "des paires de chaussures",
          back: "pairs of shoes",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 13,
          front: "des accessoires",
          back: "accessories",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 13,
          front: "une étiquette",
          back: "a price tag",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          deck_id: 13,
          front: "le prix",
          back: "the price",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 14,
          front: "acarpous",
          back: "no longer fertile, worn out",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 14,
          front: "admonitory",
          back: "containing warning",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 14,
          front: "agog",
          back: "excited, eager",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 14,
          front: "alacrity",
          back: "eager and cheerful readiness",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 14,
          front: "aplomb",
          back: "self confidence",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 14,
          front: "antithetical",
          back: "direct opposing",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 14,
          front: "argot",
          back: "jargon or slang",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 14,
          front: "aspersion",
          back: "slander",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 14,
          front: "arrant",
          back: "in the highest degree",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 14,
          front: "augury",
          back: "omen, or bad sign",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 15,
          front: "bedizen",
          back: "to adorn especially in a cheap showy manner",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 15,
          front: "bilge",
          back: "bulge the protuberance of a cask",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 15,
          front: "blandishment",
          back: "theflattery coaxing",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 15,
          front: "brook",
          back: "to endure, tolerate",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 15,
          front: "burnish",
          back: "to polish or rub to a shine",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 16,
          front: "cabal",
          back: "a scheme or a plot",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 16,
          front: "cadge",
          back: "to beg to get by begging",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 16,
          front: "chary",
          back: "cautious, wary",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 16,
          front: "churl",
          back: "bad tempered person",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 16,
          front: "cloture",
          back: "closing device (in Parliament) to end a debate by voting",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 16,
          front: "coeval",
          back: "of the same period, coexisting",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 16,
          front: "cogent",
          back: "convincing",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 16,
          front: "compunction",
          back: "feeling of regret for one's action",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 16,
          front: "contumacious",
          back: "insubordinate, rebellious",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          deck_id: 16,
          front: "craven",
          back: "cowardly",
          number_of_times_seen: 0,
          number_of_times_correct: 0,
          last_seen: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("cards", null, {});
  },
};
