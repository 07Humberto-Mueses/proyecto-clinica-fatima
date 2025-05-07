/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración adicional para permitir acceso al sistema de archivos
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      // No intentar incluir paquetes de servidor en el cliente
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }

    // Ignorar advertencias específicas de XLSX
    config.ignoreWarnings = [
      { module: /node_modules\/xlsx/ }
    ];

    return config;
  },
  
  // Configurar encabezados de seguridad si es necesario
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
  },
  
  // Aumentar el tiempo de espera para operaciones largas
  experimental: {
    serverComponentsExternalPackages: ['xlsx'],
    serverActions: {
      bodySizeLimit: '4mb',
    },
  },
};

module.exports = nextConfig;