const useBasePath = () => {
     const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
     const URL = `${origin}`;
     return {
          url: URL
     }
}

export default useBasePath