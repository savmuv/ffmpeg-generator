export default {
    CODECS_VIDEO: {
        'amv': 'AMV Video',
        'av1': 'Alliance for Open Media AV1',
        'avrp': 'Avid 1:1 10-bit RGB Packer',
        'avui': 'Avid Meridien Uncompressed',
        'ayuv': 'Uncompressed packed MS 4:4:4:4',
        'dirac': 'Dirac',
        'dnxhd': 'VC3/DNxHD',
        'flv1': 'FLV / Sorenson Spark / Sorenson H.263',
        'h261': 'H.261',
        'h263': 'H.263 / H.263-1996, H.263+ / H.263-1998 / H.263 version 2',
        'h263p': 'H.263+ / H.263-1998 / H.263 version 2',
        'h264': 'H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10',
        'hevc': 'H.265 / HEVC',
        'mpeg1video': 'MPEG-1 video',
        'mpeg2video': 'MPEG-2 video',
        'mpeg4': 'MPEG-4 part 2',
        'prores': 'Apple ProRes',
        'theora': 'Theora',
        'vp8': 'On2 VP8',
        'vp9': 'Google VP9',
        'wmv1': 'Windows Media Video 7',
        'wmv2': 'Windows Media Video 8',
        'y41p': 'Uncompressed YUV 4:1:1 12-bit',
        'yuv4': 'Uncompressed packed 4:2:0',
    },
    CODECS_AUDIO: {
        'aac': 'AAC (Advanced Audio Coding)',
        'ac3': 'ATSC A/52A (AC-3)',
        'adpcm_adx': 'SEGA CRI ADX ADPCM',
        'adpcm_g722': 'G.722 ADPCM',
        'adpcm_g726': 'G.726 ADPCM',
        'adpcm_g726le': 'G.726 ADPCM little-endian',
        'adpcm_ima_qt': 'ADPCM IMA QuickTime',
        'adpcm_ima_wav': 'ADPCM IMA WAV',
        'adpcm_ms': 'ADPCM Microsoft',
        'adpcm_swf': 'ADPCM Shockwave Flash',
        'adpcm_yamaha': 'ADPCM Yamaha',
        'alac': 'ALAC (Apple LoAudio Codec)',
        'aptx': 'aptX (Audio Processing Technology for Bluetooth)',
        'aptx_hd': 'aptX HD (Audio Processing Technology for Bluetooth)',
        'dts': 'DCA (DTS Coherent Acoustics)',
        'eac3': 'ATSC A/52B (AC-3, E-AC-3)',
        'flac': 'FLAC (Free LoAudio Codec)',
        'g723_1': 'G.723.1',
        'mp2': 'MP2 (MPEG audio layer 2)',
        'mp3': 'MP3 (MPEG audio layer 3)',
        'opus': 'Opus (Opus Interactive Audio Codec)',
        'pcm_alaw': 'PCM A-law / G.711 A-law',
        'pcm_dvd': 'PCM signed 20|24-bit big-endian',
        'pcm_f32be': 'PCM 32-bit floating point big-endian',
        'pcm_f32le': 'PCM 32-bit floating point little-endian',
        'pcm_f64be': 'PCM 64-bit floating point big-endian',
        'pcm_f64le': 'PCM 64-bit floating point little-endian',
        'pcm_mulaw': 'PCM mu-law / G.711 mu-law',
        'pcm_s16be': 'PCM signed 16-bit big-endian',
        'pcm_s16be_planar': 'PCM signed 16-bit big-endian planar',
        'pcm_s16le': 'PCM signed 16-bit little-endian',
        'pcm_s16le_planar': 'PCM signed 16-bit little-endian planar',
        'pcm_s24be': 'PCM signed 24-bit big-endian',
        'pcm_s24daud': 'PCM D-Cinema audio signed 24-bit',
        'pcm_s24le': 'PCM signed 24-bit little-endian',
        'pcm_s24le_planar': 'PCM signed 24-bit little-endian planar',
        'pcm_s32be': 'PCM signed 32-bit big-endian',
        'pcm_s32le': 'PCM signed 32-bit little-endian',
        'pcm_s32le_planar': 'PCM signed 32-bit little-endian planar',
        'pcm_s64be': 'PCM signed 64-bit big-endian',
        'pcm_s64le': 'PCM signed 64-bit little-endian',
        'pcm_s8': 'PCM signed 8-bit',
        'pcm_s8_planar': 'PCM signed 8-bit planar',
        'pcm_u16be': 'PCM unsigned 16-bit big-endian',
        'pcm_u16le': 'PCM unsigned 16-bit little-endian',
        'pcm_u24be': 'PCM unsigned 24-bit big-endian',
        'pcm_u24le': 'PCM unsigned 24-bit little-endian',
        'pcm_u32be': 'PCM unsigned 32-bit big-endian',
        'pcm_u32le': 'PCM unsigned 32-bit little-endian',
        'pcm_u8': 'PCM unsigned 8-bit',
        'pcm_vidc': 'PCM Archimedes VIDC',
        'ra_144': 'RealAudio 1.0',
        'speex': 'Speex',
        'truehd': 'TrueHD',
        'tta': 'TTA (True Audio)',
        'vorbis': 'Vorbis',
        'wavpack': 'WavPack',
        'wmav1': 'Windows Media Audio 1',
        'wmav2': 'Windows Media Audio 2',
    },
    CODECS_SUBTITLE: {
        'ass': 'ASS (Advanced SSA)',
        'dvb_subtitle': 'DVB subtitles',
        'dvd_subtitle': 'DVD subtitles',
        'mov_text': 'MOV text',
        'subrip': 'SubRip subtitle',
        'text': 'raw UTF-8 text',
        'webvtt': 'WebVTT subtitle',
        'xsub': 'XSUB',
    },
    ENCODERS: {
        'av1': 'libaom-av1',
        'cmv': 'eacmv',
        'cscd': 'camstudio',
        'dirac': 'vc2',
        'flv1': 'flv',
        'h264': 'libx264',
        'hevc': 'libx265',
        'dcin': 'idcinvideo',
        'iff_ilbm': 'iff',
        'jpeg2000': 'libopenjpeg',
        'mad': 'eamad',
        'mpeg2video': 'mpeg2video',
        'mpeg4': 'mpeg4',
        'msmpeg4v3': 'msmpeg4',
        'roq': 'roqvideo',
        'smackvideo': 'smackvid',
        'tgq': 'eatgq',
        'tgv': 'eatgv',
        'theora': 'libtheora',
        'tqi': 'eatqi',
        'tscc': 'camtasia',
        'ulti': 'ultimotion',
        'vixl': 'xl',
        'vp8': 'libvpx',
        'vp9': 'libvpx-vp9',
        'ws_vqa': 'vqavideo',
        "adpcm_g722": "g722",
        "adpcm_g726": "g726",
        "adpcm_g726le": "g726le",
        "amr_nb": "libopencore_amrnb",
        "dts": "dca",
        "ilbc": "ilbc_at",
        "mp3": "libmp3lame",
        "opus": "libopus",
        "ra_144": "real_144",
        "ra_288": "real_288",
        "smackaudio": "smackaud",
        "speex": "libspeex",
        "vorbis": "libvorbis",
        "westwood_snd1": "ws_snd1",
    },
    H264_PRESETS: {
        'ultrafast': 'ultrafast',
        'superfast': 'superfast',
        'veryfast': 'veryfast',
        'faster': 'faster',
        'fast': 'fast',
        'medium': 'medium (default)',
        'slow': 'slow',
        'slower': 'slower',
        'veryslow': 'veryslow',
    },
    H264_PROFILES: {
        'baseline': 'baseline',
        'main': 'main',
        'high': 'high',
        'high10': 'high10',
        'high422': 'high422',
        'high444': 'high444',
    },
    AUDIO_RATES: {
        '8000': '8 khz',
        '16000': '16 khz',
        '24000': '24 khz',
        '32000': '32 khz',
        '44100': '44 khz',
        '48000': '48 khz',
    },
    AUDIO_BITRATES: {
        '32k': '32 kbp/s',
        '48k': '48 kbp/s',
        '96k': '96 kbp/s',
        '128k': '128 kbp/s',
        '160k': '160 kbp/s',
        '192k': '192 kbp/s',
        '256k': '256 kbp/s',
        '320k': '320 kbp/s',
        '448k': '448 kbp/s',
        '512k': '512 kbp/s',
        '640k': '640 kbp/s',
    },
    AUDIO_VBR: {
        '0': '0 (better)',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10 (lower)'
    },
    AUDIO_CHANNELS: {
        '1': 'Mono',
        '2': 'Stereo',
        '3': '2.1',
        '6': '5.1',
        '8': '7.2',
    },
    EXAMPLE: require('./input_example'),
    LANGS: {
        "aar": "Afar",
        "abk": "Abkhazian",
        "ace": "Achinese",
        "ach": "Acoli",
        "ada": "Adangme",
        "ady": "Adygei",
        "afa": "Afro-Asiatic Languages",
        "afh": "Afrihili",
        "afr": "Afrikaans",
        "ain": "Ainu",
        "aka": "Akan",
        "akk": "Akkadian",
        "alb": "Albanian",
        "sqi": "Albanian",
        "ale": "Aleut",
        "alg": "Algonquian Languages",
        "alt": "Southern Altai",
        "amh": "Amharic",
        "ang": "English Old (ca.450-1100)",
        "anp": "Angika",
        "apa": "Apache Languages",
        "ara": "Arabic",
        "arc": "Imperial Aramaic (700-300 BCE)",
        "arg": "Aragonese",
        "arm": "Armenian",
        "hye": "Armenian",
        "arn": "Mapuche",
        "arp": "Arapaho",
        "art": "Artificial Languages",
        "arw": "Arawak",
        "asm": "Assamese",
        "ast": "Asturian",
        "ath": "Athapascan Languages",
        "aus": "Australian Languages",
        "ava": "Avaric",
        "ave": "Avestan",
        "awa": "Awadhi",
        "aym": "Aymara",
        "aze": "Azerbaijani",
        "bad": "Banda Languages",
        "bai": "Bamileke Languages",
        "bak": "Bashkir",
        "bal": "Baluchi",
        "bam": "Bambara",
        "ban": "Balinese",
        "baq": "Basque",
        "eus": "Basque",
        "bas": "Basa",
        "bat": "Baltic Languages",
        "bej": "Bedawiyet",
        "bel": "Belarusian",
        "bem": "Bemba",
        "ben": "Bengali",
        "ber": "Berber Languages",
        "bho": "Bhojpuri",
        "bih": "Bihari Languages",
        "bik": "Bikol",
        "bin": "Bini",
        "bis": "Bislama",
        "bla": "Siksika",
        "bnt": "Bantu (Other)",
        "bos": "Bosnian",
        "bra": "Braj",
        "bre": "Breton",
        "btk": "Batak Languages",
        "bua": "Buriat",
        "bug": "Buginese",
        "bul": "Bulgarian",
        "bur": "Burmese",
        "mya": "Burmese",
        "byn": "Bilin",
        "cad": "Caddo",
        "cai": "Central American Indian Languages",
        "car": "Galibi Carib",
        "cat": "Catalan",
        "cau": "Caucasian Languages",
        "ceb": "Cebuano",
        "cel": "Celtic Languages",
        "cha": "Chamorro",
        "chb": "Chibcha",
        "che": "Chechen",
        "chg": "Chagatai",
        "chi": "Chinese",
        "zho": "Chinese",
        "chk": "Chuukese",
        "chm": "Mari",
        "chn": "Chinook Jargon",
        "cho": "Choctaw",
        "chp": "Chipewyan",
        "chr": "Cherokee",
        "chu": "Church Slavic",
        "chv": "Chuvash",
        "chy": "Cheyenne",
        "cmc": "Chamic Languages",
        "cop": "Coptic",
        "cor": "Cornish",
        "cos": "Corsican",
        "cpe": "Creoles And Pidgins",
        "cpf": "Creoles And Pidgins",
        "cpp": "Creoles And Pidgins",
        "cre": "Cree",
        "crh": "Crimean Tatar",
        "crp": "Creoles And Pidgins",
        "csb": "Kashubian",
        "cus": "Cushitic Languages",
        "cze": "Czech",
        "ces": "Czech",
        "dak": "Dakota",
        "dan": "Danish",
        "dar": "Dargwa",
        "day": "Land Dayak Languages",
        "del": "Delaware",
        "den": "Slave (Athapascan)",
        "dgr": "Dogrib",
        "din": "Dinka",
        "div": "Dhivehi",
        "doi": "Dogri",
        "dra": "Dravidian Languages",
        "dsb": "Lower Sorbian",
        "dua": "Duala",
        "dum": "Dutch Middle (ca.1050-1350)",
        "dut": "Dutch",
        "nld": "Dutch",
        "dyu": "Dyula",
        "dzo": "Dzongkha",
        "efi": "Efik",
        "egy": "Egyptian (Ancient)",
        "eka": "Ekajuk",
        "elx": "Elamite",
        "eng": "English",
        "enm": "English Middle (1100-1500)",
        "epo": "Esperanto",
        "est": "Estonian",
        "ewe": "Ewe",
        "ewo": "Ewondo",
        "fan": "Fang",
        "fao": "Faroese",
        "fat": "Fanti",
        "fij": "Fijian",
        "fil": "Filipino",
        "fin": "Finnish",
        "fiu": "Finno-Ugrian Languages",
        "fon": "Fon",
        "fre": "French",
        "fra": "French",
        "frm": "French Middle (ca.1400-1600)",
        "fro": "French Old (842-ca.1400)",
        "frr": "Northern Frisian",
        "frs": "Eastern Frisian",
        "fry": "Western Frisian",
        "ful": "Fulah",
        "fur": "Friulian",
        "gaa": "Ga",
        "gay": "Gayo",
        "gba": "Gbaya",
        "gem": "Germanic Languages",
        "geo": "Georgian",
        "kat": "Georgian",
        "ger": "German",
        "deu": "German",
        "gez": "Geez",
        "gil": "Gilbertese",
        "gla": "Gaelic",
        "gle": "Irish",
        "glg": "Galician",
        "glv": "Manx",
        "gmh": "German Middle High (ca.1050-1500)",
        "goh": "German Old High (ca.750-1050)",
        "gon": "Gondi",
        "gor": "Gorontalo",
        "got": "Gothic",
        "grb": "Grebo",
        "grc": "Greek Ancient (to 1453)",
        "gre": "Greek Modern (1453-)",
        "ell": "Greek Modern (1453-)",
        "grn": "Guarani",
        "gsw": "Alemannic",
        "guj": "Gujarati",
        "gwi": "Gwich'in",
        "hai": "Haida",
        "hat": "Haitian",
        "hau": "Hausa",
        "haw": "Hawaiian",
        "heb": "Hebrew",
        "her": "Herero",
        "hil": "Hiligaynon",
        "him": "Himachali Languages",
        "hin": "Hindi",
        "hit": "Hittite",
        "hmn": "Hmong",
        "hmo": "Hiri Motu",
        "hrv": "Croatian",
        "hsb": "Upper Sorbian",
        "hun": "Hungarian",
        "hup": "Hupa",
        "iba": "Iban",
        "ibo": "Igbo",
        "ice": "Icelandic",
        "isl": "Icelandic",
        "ido": "Ido",
        "iii": "Nuosu",
        "ijo": "Ijo Languages",
        "iku": "Inuktitut",
        "ile": "Interlingue",
        "ilo": "Iloko",
        "ina": "Interlingua (International Auxiliary Language Association)",
        "inc": "Indic Languages",
        "ind": "Indonesian",
        "ine": "Indo-European Languages",
        "inh": "Ingush",
        "ipk": "Inupiaq",
        "ira": "Iranian Languages",
        "iro": "Iroquoian Languages",
        "ita": "Italian",
        "jav": "Javanese",
        "jbo": "Lojban",
        "jpn": "Japanese",
        "jpr": "Judeo-Persian",
        "jrb": "Judeo-Arabic",
        "kaa": "Kara-Kalpak",
        "kab": "Kabyle",
        "kac": "Jingpho",
        "kal": "Greenlandic",
        "kam": "Kamba",
        "kan": "Kannada",
        "kar": "Karen Languages",
        "kas": "Kashmiri",
        "kau": "Kanuri",
        "kaw": "Kawi",
        "kaz": "Kazakh",
        "kbd": "Kabardian",
        "kha": "Khasi",
        "khi": "Khoisan Languages",
        "khm": "Central Khmer",
        "kho": "Khotanese",
        "kik": "Gikuyu",
        "kin": "Kinyarwanda",
        "kir": "Kirghiz",
        "kmb": "Kimbundu",
        "kok": "Konkani",
        "kom": "Komi",
        "kon": "Kongo",
        "kor": "Korean",
        "kos": "Kosraean",
        "kpe": "Kpelle",
        "krc": "Karachay-Balkar",
        "krl": "Karelian",
        "kro": "Kru Languages",
        "kru": "Kurukh",
        "kua": "Kuanyama",
        "kum": "Kumyk",
        "kur": "Kurdish",
        "kut": "Kutenai",
        "lad": "Ladino",
        "lah": "Lahnda",
        "lam": "Lamba",
        "lao": "Lao",
        "lat": "Latin",
        "lav": "Latvian",
        "lez": "Lezghian",
        "lim": "Limburgan",
        "lin": "Lingala",
        "lit": "Lithuanian",
        "lol": "Mongo",
        "loz": "Lozi",
        "ltz": "Letzeburgesch",
        "lua": "Luba-Lulua",
        "lub": "Luba-Katanga",
        "lug": "Ganda",
        "lui": "Luiseno",
        "lun": "Lunda",
        "luo": "Luo (Kenya And Tanzania)",
        "lus": "Lushai",
        "mac": "Macedonian",
        "mkd": "Macedonian",
        "mad": "Madurese",
        "mag": "Magahi",
        "mah": "Marshallese",
        "mai": "Maithili",
        "mak": "Makasar",
        "mal": "Malayalam",
        "man": "Mandingo",
        "mao": "Maori",
        "mri": "Maori",
        "map": "Austronesian Languages",
        "mar": "Marathi",
        "mas": "Masai",
        "may": "Malay",
        "msa": "Malay",
        "mdf": "Moksha",
        "mdr": "Mandar",
        "men": "Mende",
        "mga": "Irish Middle (900-1200)",
        "mic": "Mi'kmaq",
        "min": "Minangkabau",
        "mis": "Uncoded Languages",
        "mkh": "Mon-Khmer Languages",
        "mlg": "Malagasy",
        "mlt": "Maltese",
        "mnc": "Manchu",
        "mni": "Manipuri",
        "mno": "Manobo Languages",
        "moh": "Mohawk",
        "mon": "Mongolian",
        "mos": "Mossi",
        "mul": "Multiple Languages",
        "mun": "Munda Languages",
        "mus": "Creek",
        "mwl": "Mirandese",
        "mwr": "Marwari",
        "myn": "Mayan Languages",
        "myv": "Erzya",
        "nah": "Nahuatl Languages",
        "nai": "North American Indian Languages",
        "nap": "Neapolitan",
        "nau": "Nauru",
        "nav": "Navaho",
        "nbl": "Ndebele",
        "nde": "Ndebele",
        "ndo": "Ndonga",
        "nds": "Low",
        "nep": "Nepali",
        "new": "Nepal Bhasa",
        "nia": "Nias",
        "nic": "Niger-Kordofanian Languages",
        "niu": "Niuean",
        "nno": "Norwegian",
        "nob": "Bokmål",
        "nog": "Nogai",
        "non": "Norse",
        "nor": "Norwegian",
        "nqo": "N'Ko",
        "nso": "Northern Sotho",
        "nub": "Nubian Languages",
        "nwc": "Classical Nepal Bhasa",
        "nya": "Chewa",
        "nym": "Nyamwezi",
        "nyn": "Nyankole",
        "nyo": "Nyoro",
        "nzi": "Nzima",
        "oci": "Occitan (post 1500)",
        "oji": "Ojibwa",
        "ori": "Oriya",
        "orm": "Oromo",
        "osa": "Osage",
        "oss": "Ossetian",
        "ota": "Turkish Ottoman (1500-1928)",
        "oto": "Otomian Languages",
        "paa": "Papuan Languages",
        "pag": "Pangasinan",
        "pal": "Pahlavi",
        "pam": "Kapampangan",
        "pan": "Panjabi",
        "pap": "Papiamento",
        "pau": "Palauan",
        "peo": "Persian Old (ca.600-400 B.C.)",
        "per": "Persian",
        "fas": "Persian",
        "phi": "Philippine Languages",
        "phn": "Phoenician",
        "pli": "Pali",
        "pol": "Polish",
        "pon": "Pohnpeian",
        "por": "Portuguese",
        "pra": "Prakrit Languages",
        "pro": "Provençal Old (to 1500)",
        "pus": "Pashto",
        "que": "Quechua",
        "raj": "Rajasthani",
        "rap": "Rapanui",
        "rar": "Cook Islands Maori",
        "roa": "Romance Languages",
        "roh": "Romansh",
        "rom": "Romany",
        "rum": "Moldavian",
        "ron": "Moldavian",
        "run": "Rundi",
        "rup": "Aromanian",
        "rus": "Russian",
        "sad": "Sandawe",
        "sag": "Sango",
        "sah": "Yakut",
        "sai": "South American Indian (Other)",
        "sal": "Salishan Languages",
        "sam": "Samaritan Aramaic",
        "san": "Sanskrit",
        "sas": "Sasak",
        "sat": "Santali",
        "scn": "Sicilian",
        "sco": "Scots",
        "sel": "Selkup",
        "sem": "Semitic Languages",
        "sga": "Irish Old (to 900)",
        "sgn": "Sign Languages",
        "shn": "Shan",
        "sid": "Sidamo",
        "sin": "Sinhala",
        "sio": "Siouan Languages",
        "sit": "Sino-Tibetan Languages",
        "sla": "Slavic Languages",
        "slo": "Slovak",
        "slk": "Slovak",
        "slv": "Slovenian",
        "sma": "Southern Sami",
        "sme": "Northern Sami",
        "smi": "Sami Languages",
        "smj": "Lule Sami",
        "smn": "Inari Sami",
        "smo": "Samoan",
        "sms": "Skolt Sami",
        "sna": "Shona",
        "snd": "Sindhi",
        "snk": "Soninke",
        "sog": "Sogdian",
        "som": "Somali",
        "son": "Songhai Languages",
        "sot": "Sotho",
        "spa": "Castilian",
        "srd": "Sardinian",
        "srn": "Sranan Tongo",
        "srp": "Serbian",
        "srr": "Serer",
        "ssa": "Nilo-Saharan Languages",
        "ssw": "Swati",
        "suk": "Sukuma",
        "sun": "Sundanese",
        "sus": "Susu",
        "sux": "Sumerian",
        "swa": "Swahili",
        "swe": "Swedish",
        "syc": "Classical Syriac",
        "syr": "Syriac",
        "tah": "Tahitian",
        "tai": "Tai Languages",
        "tam": "Tamil",
        "tat": "Tatar",
        "tel": "Telugu",
        "tem": "Timne",
        "ter": "Tereno",
        "tet": "Tetum",
        "tgk": "Tajik",
        "tgl": "Tagalog",
        "tha": "Thai",
        "tib": "Tibetan",
        "bod": "Tibetan",
        "tig": "Tigre",
        "tir": "Tigrinya",
        "tiv": "Tiv",
        "tkl": "Tokelau",
        "tlh": "Klingon",
        "tli": "Tlingit",
        "tmh": "Tamashek",
        "tog": "Tonga (Nyasa)",
        "ton": "Tonga (Tonga Islands)",
        "tpi": "Tok Pisin",
        "tsi": "Tsimshian",
        "tsn": "Tswana",
        "tso": "Tsonga",
        "tuk": "Turkmen",
        "tum": "Tumbuka",
        "tup": "Tupi Languages",
        "tur": "Turkish",
        "tut": "Altaic Languages",
        "tvl": "Tuvalu",
        "twi": "Twi",
        "tyv": "Tuvinian",
        "udm": "Udmurt",
        "uga": "Ugaritic",
        "uig": "Uighur",
        "ukr": "Ukrainian",
        "umb": "Umbundu",
        "und": "Undetermined",
        "urd": "Urdu",
        "uzb": "Uzbek",
        "vai": "Vai",
        "ven": "Venda",
        "vie": "Vietnamese",
        "vol": "Volapük",
        "vot": "Votic",
        "wak": "Wakashan Languages",
        "wal": "Walamo",
        "war": "Waray",
        "was": "Washo",
        "wel": "Welsh",
        "cym": "Welsh",
        "wen": "Sorbian Languages",
        "wln": "Walloon",
        "wol": "Wolof",
        "xal": "Kalmyk",
        "xho": "Xhosa",
        "yao": "Yao",
        "yap": "Yapese",
        "yid": "Yiddish",
        "yor": "Yoruba",
        "ypk": "Yupik Languages",
        "zap": "Zapotec",
        "zbl": "Bliss",
        "zen": "Zenaga",
        "zgh": "Standard Moroccan Tamazight",
        "zha": "Chuang",
        "znd": "Zande Languages",
        "zul": "Zulu",
        "zun": "Zuni",
        "zxx": "No Linguistic Content",
        "zza": "Dimili"
    },
}
