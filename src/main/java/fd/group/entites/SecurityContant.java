package fd.group.entites;

public enum SecurityContant {
    HEADER("Authorization", 0L), SECRET("fode@gmail.com", 0L), PREFIX_TOKEN("Bearer ", 0L), DATE_EXPIRATION("",
            865_000_000L);

    private String valeur = "";
    private Long   expire = 0L;

    private SecurityContant(String valeur, Long expire) {
        this.valeur = valeur;
        this.expire = expire;
    }

    public String getValeur() {
        return valeur;
    }

    public Long getExpire() {
        return expire;
    }

}
