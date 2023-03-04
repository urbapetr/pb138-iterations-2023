<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />

    <xsl:template match="group">
        <div>
            <h4>
                <xsl:value-of select="groupname" />
            </h4>
            <span>
                <xsl:value-of select="@id" />
            </span>
            <span>
                <xsl:value-of select="description" />
            </span>
        </div>
        <div>
            <h3>Members:</h3>
            <xsl:apply-templates select="members/member" />
        </div>

        <div>
            <h3>Posts:</h3>
            <xsl:apply-templates select="posts/post" />
        </div>
    </xsl:template>

    <xsl:template match="member">
        <h5>
            <xsl:value-of select="@username" />
        </h5>
        <span>
            <xsl:value-of select="@id" />
        </span>
    </xsl:template>

    <xsl:template match="post">
        <span>
            <xsl:value-of select="@id" />
        </span>
        <span>
            <xsl:value-of select="@sent" />
        </span>
        <span>
            <xsl:value-of select="@reply_to" />
        </span>
        <p>
            <xsl:value-of select="content" />
        </p>
    </xsl:template>

</xsl:stylesheet>