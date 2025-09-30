const categorias = [
  {
    nombre: "Traumatología",
    descripcion: "Insumos y dispositivos médicos para el tratamiento de lesiones óseas y articulares.",
    subcategorias: [
      {
        nombre: "Placas y Tornillos",
        productos: [
          {
            nombre: "Placa bloqueada 3.5mm para fémur",
            descripcion: "Placa de titanio anatómica para fijación de fracturas femorales.",
            precio: 150.00,
            codigo: "TRA-PLT-001"
          },
          {
            nombre: "Tornillo cortical 3.5mm",
            descripcion: "Tornillo de acero inoxidable, compatible con placa bloqueada.",
            precio: 12.00,
            codigo: "TRA-TOR-002"
          }
        ]
      },
      {
        nombre: "Fijadores Externos",
        productos: [
          {
            nombre: "Fijador externo modular",
            descripcion: "Sistema de fijación externa para fracturas abiertas.",
            precio: 450.00,
            codigo: "TRA-FIJ-003"
          }
        ]
      }
    ]
  },
  {
    nombre: "Neurocirugía",
    descripcion: "Materiales quirúrgicos y dispositivos para intervenciones del sistema nervioso central.",
    subcategorias: [
      {
        nombre: "Craneotomía",
        productos: [
          {
            nombre: "Placa craneal de titanio",
            descripcion: "Placa estéril para fijación tras craneotomía.",
            precio: 120.00,
            codigo: "NEU-CRA-001"
          },
          {
            nombre: "Malla de titanio 10x10cm",
            descripcion: "Malla flexible para reconstrucción craneal.",
            precio: 95.00,
            codigo: "NEU-CRA-002"
          }
        ]
      }
    ]
  },
  {
    nombre: "Maxilofacial",
    descripcion: "Productos especializados para intervenciones en mandíbula, maxilar y rostro.",
    subcategorias: [
      {
        nombre: "Placas y Tornillos Maxilofaciales",
        productos: [
          {
            nombre: "Placa L 2.0mm",
            descripcion: "Placa en forma de L para osteosíntesis mandibular.",
            precio: 55.00,
            codigo: "MAX-PLT-001"
          },
          {
            nombre: "Tornillo 2.0mm x 6mm",
            descripcion: "Tornillo autorroscante para cirugía maxilofacial.",
            precio: 5.00,
            codigo: "MAX-TOR-002"
          }
        ]
      }
    ]
  },
  {
    nombre: "Rehabilitación",
    descripcion: "Equipos y accesorios para procesos de recuperación física postoperatoria o terapias.",
    subcategorias: [
      {
        nombre: "Ortesis",
        productos: [
          {
            nombre: "Rodillera postoperatoria ajustable",
            descripcion: "Ortesis para control de rango de movimiento postcirugía.",
            precio: 85.00,
            codigo: "REH-ORT-001"
          }
        ]
      },
      {
        nombre: "Fisioterapia",
        productos: [
          {
            nombre: "Banda elástica de resistencia media",
            descripcion: "Ideal para ejercicios de fortalecimiento en terapia física.",
            precio: 10.00,
            codigo: "REH-FIS-002"
          }
        ]
      }
    ]
  }
];
