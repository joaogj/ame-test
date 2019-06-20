export const formatThousand = (x, separator = '.') => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}